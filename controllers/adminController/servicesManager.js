
// ------Ajout
const addSerives = function(request, response) {
    return response.send("Ajout d'un service ....");
};

// -----Mise a jour
const updateServices = function(request, response){
    return response.send("Mise a jour d'un service ....");
};

// suppression
const deleteServices = function(request, response){
    return response.send("suppression d'un service ");
};

module.exports = {
    addSerives,
    updateServices,
    deleteServices
};