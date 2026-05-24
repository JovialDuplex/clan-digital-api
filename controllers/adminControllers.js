// ------------------- Gestion des service ---------------------------
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

//-------------------- Gestion des Projets --------------------------------
// ----Ajout
const addProjects = function(request, response){
    return response.send("Ajout d'un projet ....."); 
}; 

// ---- Modification 
const updateProjects = function(request, response){
    return response.send("Modification du projet ....");
};

// ---- suppression 
const deleteProjects = function(request, response){
    return response.send("Suppression du projet ....");
}

module.exports = {
    addProjects,
    updateProjects,
    deleteProjects,

    addSerives,
    updateServices,
    deleteServices
};