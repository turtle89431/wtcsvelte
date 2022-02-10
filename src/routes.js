import Home from "./pages/Home.svelte"
import layout from "./components/__layout.svelte"
import _404 from "./pages/404.svelte"
export let routes = [
    {
        name: '404',
        path: '404',
        component: _404,
        layout
    },
    { name: '/', component: Home, layout, txt: "Home" }
]
export let pgs = routes.map(r => {
    let { name: src, txt } = r
    return { src, txt }
})