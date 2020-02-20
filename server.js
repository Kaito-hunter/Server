const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

nunjucks.configure("./", {
    express: server
})

server.get("/", function(req,res){
    return res.render("index.html")
})

server.listen(7777)