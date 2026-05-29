// recuperation des services -----------------------------------------
const getServices = function(request, response) {
    response.send("recuperation des services que propose clan-digital");
};

// recuperation des projets realiser ---------------------------------
const getProjects = function(request, response){
    response.send("recuperation des projets realiser par clan-digital");
};

// recuperation des temoignages --------------------------------------
const getTestimony = function(request, response){
    return response.send("recuperation des temoignages des clients satisfaits");
};

// authentification des utilisateurs 
const login = function(resquest, response){
    return response.send("authentification en cour ...");
};

const register = function(request, response){
    return response.send("enregistrement en cour ...");
};

module.exports = {
    getServices,
    getProjects,
    getTestimony,

    login,
    register
};