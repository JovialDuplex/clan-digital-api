const serviceModel = require("../../models/services");
const {cloudinary} = require("../../config");

// ------Ajout
const addSerives = async function(request, response) {
    try {
        let file_path = "";

        if (process.env.NODE_ENV == 'prod') {
            // uploader le fichier sur cloudinary si on est en production 
            
            const result = await cloudinary.uploader.upload(request.file.path, {
                folder: "clan-digital/services"
            });
            file_path = result.public_id;

        } else {
            // upload le fichier en local 
            file_path = request.file.path;
        }

        const newService = new serviceModel({...request.body, service_image: file_path});
        await newService.save();
        console.log("Service cree avec success !");
            
        response.json({
            message: "service ajouté avec success",
            service: newService
        });

    
    } catch (error) {
        console.log("erreur lors de l'ajout d'un service ", error);
        return response.status(500).send("erreur lors de l'ajout d'un service");
    }


};

// -----Mise a jour
const updateServices = function(request, response){
    try{
        const {id} = request.query;
        serviceModel.findByIdAndUpdate(id, {...request.body}, {new: true}).then(function(service){
            if(!service){
                return response.status(404).send("service non trouvé");
            }
            return response.json({message: "service mis a jour avec succès", service});
        }).catch(function(error){
            console.log("erreur lors de la mise a jour du service ", error);
            return response.status(500).send("erreur lors de la mise a jour du service");
        });

    }catch(error){
        console.log("erreur lors de la mise a jour du service ", error);
        return response.status(500).send("erreur lors de la mise a jour du service");
    }
     
};

// suppression
const deleteServices = async function(request, response){
    serviceModel.findByIdAndDelete(request.query.id).then(function(service){
        if(!service){
            return response.status(404).send("service non trouvé");
        }
        return response.json({message: "service supprimé avec succès", service});
    }).catch(function(error){
        console.log("erreur lors de la suppression du service ", error);
        return response.status(500).send("erreur lors de la suppression du service");
    });
};

module.exports = {
    addSerives,
    updateServices,
    deleteServices
};