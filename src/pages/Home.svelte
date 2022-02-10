<script>
    import { onMount } from "svelte";
    import { props, WS } from "../stores";
    let { session } = $props;
    onMount(() => {
        console.log($WS);
    });
    $: console.log($WS);
    const send = () => {
        $WS = { client: session.user + " sent this" };
    };
    $: console.log(session);
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>
<div class="row">
    <div class="col">
        {#each $WS as obj}
            {#each Object.keys(obj) as key}
                &lcub;{key}:&apos;{obj[key]}&apos;&rcub;<br />
            {/each}
        {/each}
    </div>
    <div class="col">
        <button on:click={send}>Test</button>
    </div>
</div>
