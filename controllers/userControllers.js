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


module.exports = {
    getServices,
    getProjects,
    getTestimony,
};