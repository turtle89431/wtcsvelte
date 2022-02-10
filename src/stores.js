import { writable } from "svelte/store";
import websocketStore from "svelte-websocket-store";

const initialValue = [{ initialValue: "Press Test to test WebSocket" }];
export const WS = websocketStore("wss://home.winserworks.com", initialValue, ['shit']);


export let props = writable({ test: "hi" })
