const {Sequelize} = require("sequelize");

// Configuration d'un sequelize pour connexion a la base de donnee 

const connectDB = async function() {
    const sequelize = new Sequelize(
        process.env.DATABASE_NAME,
        process.env.DATABASE_USER,
        process.env.DATABASE_PASSWORD,
        {
            host: process.env.DATABASE_HOST,
            dialect: "mysql"
        }
    );

    try{
        await sequelize.authenticate();
        console.log("Connexion a la base de donnee mysql reussit");
    } catch (error) {
        console.log("Une erreur est survenue lors de la connexion a la base de donnee");
        throw error;
    }

};

module.exports = {
    connectDB
};