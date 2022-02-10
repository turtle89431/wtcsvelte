import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		routeProps: {
			props: "*Props**",
			session: "*Session**"
		}
	}
});

export default app;