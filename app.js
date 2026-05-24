require("dotenv").config();
const express = require("express");
const vhost = require("vhost");

const port = process.env.PORT || 5000;

const app = express();
const adminApp = express();

app.use(vhost("admin.clandigital.local", adminApp));

app.get("/", (request, response)=>{
    response.send("hello world");
});

adminApp.get("/", (request, response)=>{
    response.send("hello world admin");
});


app.listen(port, function(){
    console.log("serveur demarrer avec success sur le port ", port);
})