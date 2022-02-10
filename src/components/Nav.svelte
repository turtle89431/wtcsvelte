<script>
    import { pgs } from "../routes";
    import { routeIsActive } from "svelte-router-spa";
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon" />
        </button>
        <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
        >
            <ul class="navbar-nav">
                {#each pgs as { src, txt }}
                    {#if txt}
                        <li class="nav-item">
                            <a
                                class:active={routeIsActive("/" + src)}
                                class="nav-link"
                                aria-current="page"
                                href={src}>{txt}</a
                            >
                        </li>
                    {/if}
                {/each}
            </ul>
        </div>
    </div>
</nav>
