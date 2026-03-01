# syntax=docker/dockerfile:1.7

FROM node:22-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm ci
# Copy only what we need; rely on .dockerignore for the rest
COPY . .
ENV DEPLOY_ENV=docker NODE_ENV=production
RUN npm run build

FROM node:22-alpine AS runner
# tini for proper init (optional; remove if you use --init at runtime)
RUN apk add --no-cache tini
WORKDIR /app
ENV NODE_ENV=production PORT=3000 HOST=0.0.0.0

# Non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S sveltekit -u 1001

# Copy runtime artifacts
COPY --from=builder --chown=sveltekit:nodejs /app/build ./build
COPY --from=builder --chown=sveltekit:nodejs /app/package.json ./
COPY --from=deps    --chown=sveltekit:nodejs /app/node_modules ./node_modules

USER sveltekit
EXPOSE 3000

# Health check honors overridden PORT (required by some PaaS like Coolify)
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD node -e "const http=require('http');const p=process.env.PORT||3000;http.get({host:'127.0.0.1',port:p,path:'/health',timeout:2000},(r)=>process.exit(r.statusCode===200?0:1)).on('error',()=>process.exit(1));"

ENTRYPOINT ["/sbin/tini","--"]
CMD ["node","build"]
