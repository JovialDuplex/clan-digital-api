
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2; 
const multer = require("multer");
const path = require("path");

// configuration de cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_API_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// configuration de multer 
const storage = multer.diskStorage(process.env.NODE_ENV == 'prod' ? {} : {
    destination : function (request, file, callback){
        callback(null, "public/uploads");
    },
    filename : function(request, file, callback){
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random()* 1E9);
        callback(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)); 
    },
});

const upload = multer({storage});

// configuration de la base de donnee
const connectDB = async function(){
    const uri = process.env.NODE_ENV === "prod" ? process.env.PROD_MONGO_URI : process.env.LOCAL_MONGO_URI;
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
    connectDB,
    cloudinary,
    upload,
};