const { config } = require("dotenv");
const multer = require("multer");
const mongoose = require("mongoose");
// configuration de la base de donnee
const connectDB = async function(){
    const uri = process.env.NODE_ENV === "production" ? process.env.PROD_MONGO_URI : process.env.LOCAL_MONGO_URI;
    try {
        await mongoose.connect(uri);
        console.log("connexion a la base de donnee reussie");
    } catch (error) {
        console.log("erreur de connexion a la base de donnee ", error);
        throw error;
    }
}

// configuration de l'application
const configApp = function(app, express){
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

}

module.exports = {
    configApp,
    connectDB
};