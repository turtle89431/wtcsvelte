var express = require('express');
var router = express.Router();
const { readFileSync } = require('fs');
const { resolve, join } = require('path');
let props = { server: "hello" }

router.get("/bundle.css", (req, res) => {
    res.type(".css")
    let tmp = readFileSync(resolve("view", "bundle.css"), { encoding: "utf-8" })
    res.end(tmp)
})
router.get("/bundle.js", (req, res) => {
    res.type(".js")
    req.session.user = "walter"
    let tmp = readFileSync(resolve("view", "bundle.view"), { encoding: "utf-8" })
    let out = tmp.replace(`"*Props**"`, JSON.stringify(props)).replace(`"*Session**"`, JSON.stringify(req.session))
    res.end(out)
})
router.get("*", (req, res) => {
    let url = join(__dirname, "..", "public", "index.html")
    res.sendFile(url)
})
//export this router to use in our index.js
module.exports = router; 