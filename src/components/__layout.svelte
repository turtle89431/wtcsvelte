<script>
    import { Route } from "svelte-router-spa";
    import "bootstrap/dist/css/bootstrap.min.css";
    import Nav from "./Nav.svelte";
    export let currentRoute;
</script>

<Nav />
<div class="container-fluid">
    <Route {currentRoute} />
</div>

<style>
</style>
