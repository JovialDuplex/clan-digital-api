require("dotenv").config();
const express = require("express");
const expressWs = require("express-ws");
const userRoute = require("./routes/userRoutes");
const adminRoute = require("./routes/adminRoutes");
const vhost = require("vhost");
const {configApp, connectDB} = require("./config");

const port = process.env.PORT || 5000;

const app = express();
const adminApp = express();

configApp(app, express);
configApp(adminApp, express);

// activation du protocole websocket sur l'application principale 
expressWs(app);

// connexion a la base de donnee
connectDB();

// utilisation de mes middlewares
app.use(vhost("admin.clandigital.local", adminApp));
app.use(userRoute);
adminApp.use(adminRoute);

app.listen(port, function(){
    console.log("serveur demarrer avec success sur le port ", port);
})