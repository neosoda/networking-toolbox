# Notes de déploiement Coolify

## Mode de build
Utilisez le mode **Dockerfile** dans Coolify (recommandé).

Le dépôt fournit un `Dockerfile` multi-stage de production et un health check runtime (`/health`) qui respecte `PORT`.

## Variables runtime requises
Définissez ces variables d'environnement dans Coolify :

- `NODE_ENV=production`
- `HOST=0.0.0.0`
- `PORT=3000` (ou laissez la valeur par défaut de Coolify s'il l'injecte)

## Si vous utilisez Nixpacks / mode Node au lieu de Dockerfile
Utilisez :

- Commande de build : `npm run build:coolify`
- Commande de démarrage : `npm run start:coolify`

Cela force `adapter-node` et évite une sélection ambiguë de l'adapter automatique.

## Garde-fou Nixpacks versionné dans le repo
Un `nixpacks.toml` est inclus pour rendre Nixpacks déterministe :

- force le provider `node`
- build avec `npm run build:coolify`
- start avec `npm run start:coolify`

Cela évite les dérives d'auto-détection (par exemple la sélection de Python et la génération d'une commande de démarrage vide).
