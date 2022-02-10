<script>
	import { Router } from "svelte-router-spa";
	import { routes } from "./routes";
	import { props } from "./stores";
	export let routeProps;
	props.set(routeProps);
</script>

<Router {routes} />
