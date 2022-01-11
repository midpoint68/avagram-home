import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),
        target: '#svelte',
        paths: {
            base: dev ? '' : '/avagram-io',
        },
        appDir: 'internal',
    }
};


export default config;
