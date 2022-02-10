// express js
const express = require('express');
const session = require('express-session')
const app = express()
const port = 3000
const http = require('http');
//const server = http.createServer(app);
const { join } = require('path');
//websockets
//const webSocketServer = require('websocket').server;
//const wsServer = new webSocketServer({ httpServer: server });
const WebSocket = require("ws")
const websocketServer = new WebSocket.Server({
    noServer: true
});
websocketServer.on('connection', (socket, req) => {
    console.log(req.session)
    socket.on('message', message => {
        let incoming = JSON.parse(message.toString("ascii"))
        incoming.reply = `server got ${JSON.stringify(incoming)}`
        clients.push(incoming)
        socket.send(JSON.stringify(clients))
    });
});
websocketServer.on("message", e => {
    console.log(e)
})
const clients = [];

// svelte bundle routes
const bundle = require("./bundle")
// app setup
app.use(express.static('public'))
const sessionSecret = "@your supper secret phrase to protect your sessions@"
app.use(session({
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    secret: sessionSecret
}))
// add non svelte routes here

app.get('/api', (req, res) => {
    res.send('Hello World!')
})
//bind svelte to express app
app.use("/", bundle)
//bind express app to port
let server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
server.on("upgrade", (req, socket, head) => {
    websocketServer.handleUpgrade(req, socket, head, (websocket) => {

        websocketServer.emit("connection", websocket, req);
    })
})