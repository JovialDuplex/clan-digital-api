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
    deleteProjects
};