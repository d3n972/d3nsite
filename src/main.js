import App from './App.svelte';

const app = new App({
	target: document.getElementById('pagescroll'),
	props: {
		name: 'world'
	}
});

export default app;