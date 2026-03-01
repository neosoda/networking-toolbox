import { readFileSync } from 'fs';

// Import plugins
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// Import adapters (only 1 gets used tho)
import adapterAuto from '@sveltejs/adapter-auto';
import adapterVercel from '@sveltejs/adapter-vercel';
import adapterNode from '@sveltejs/adapter-node';
import adapterNetlify from '@sveltejs/adapter-netlify';
import adapterStatic from '@sveltejs/adapter-static';

// Read version from package.json
const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
const appVersion = pkg.version;

/**
 * Determines the appropriate adapter for given deployment context.
 * You can manually set DEPLOY_ENV to override auto-detection.
 * Supported values: 'vercel', 'node', 'docker', 'coolify', 'netlify', 'static', 'auto'
 * @returns {import('@sveltejs/kit').Adapter}
 */
function getAdapter() {
	// Manual override via DEPLOY_ENV environment variable
	const deployEnv = process.env.DEPLOY_ENV?.toLowerCase();
	if (deployEnv) {
		switch (deployEnv) {
			case 'vercel':
				return adapterVercel();
			case 'node':
			case 'docker':
			case 'coolify':
				return adapterNode();
			case 'netlify':
				return adapterNetlify();
			case 'static':
				return adapterStatic({
					strict: false,
					fallback: '404.html'
				});
			case 'auto':
				return adapterAuto();
			default:
				return adapterAuto();
		}
	}

	// Auto-detection based on environment variables
	const isVercel = !!(process.env.VERCEL || process.env.VERCEL_ENV);
	const isNetlify = !!(process.env.NETLIFY || process.env.NETLIFY_SITE_ID);
	const isCoolify = !!(
		process.env.COOLIFY_URL ||
		process.env.COOLIFY_BRANCH ||
		process.env.SOURCE_COMMIT ||
		process.env.PORT
	);
	const isDocker = !!(
		process.env.DOCKER_CONTAINER ||
		process.env.KUBERNETES_SERVICE_HOST ||
		process.env.HOSTNAME?.includes('docker') ||
		process.env.container === 'docker'
	);
	const isNodeServer = !!(
		(process.env.NODE_ENV === 'production' &&
			(process.env.PORT || process.env.HOST || process.env.SERVER_HOST)) ||
		process.env.GITHUB_ACTIONS
	);
	const isStatic = !!(
		process.env.CI &&
		(process.env.GITHUB_ACTIONS || process.env.GITLAB_CI) &&
		process.env.BUILD_STATIC === 'true'
	);

	if (isVercel) {
		return adapterVercel();
	} else if (isNetlify) {
		return adapterNetlify();
	} else if (isCoolify || isDocker || isNodeServer) {
		return adapterNode();
	} else if (isStatic) {
		return adapterStatic();
	}
	return adapterAuto();
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: getAdapter(),
		paths: {
			base: process.env.BASE_URL || process.env.BASE_PATH || ''
		},
		env: {
			publicPrefix: 'NTB_'
		},
		prerender: {
			entries: ['/', '/sitemap'],
			handleHttpError: 'warn',
			handleMissingId: 'warn',
			handleUnseenRoutes: 'warn'
		}
	},
	vite: {
		define: {
			__APP_VERSION__: JSON.stringify(appVersion)
		}
	}
};

export default config;
