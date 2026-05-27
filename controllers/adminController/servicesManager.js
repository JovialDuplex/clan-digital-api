const {LoremIpsum} = require("lorem-ipsum");

// ------Ajout
const addSerives = async function(request, response) {
    return response.send("ajout de l'article ...");
};

// -----Mise a jour
const updateServices = async function(request, response){
    return response.send("mise a jour de l'article...");
};

// suppression
const deleteServices = async function(request, response){
    return response.send("suppresion de l'article ...");
};

module.exports = {
    addSerives,
    updateServices,
    deleteServices
};