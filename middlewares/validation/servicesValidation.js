const joi = require("joi");
const serviceModel = require("../../models/services");
const fs = require("fs");

// Validation pour l'ajout d'un service
const addServiceValidation = function(request, response, next) {
    const schema = joi.object({
        service_name: joi.string().required().messages({
            "string.empty": "Le nom du service ne peut pas être vide",
            "any.required": "Le nom du service est requis"
        }),
        
        service_description: joi.string().required().messages({
            "string.empty": "La description ne peut pas être vide",
            "any.required": "La description est requise"
        }),
        service_image: joi.object({
                mimetype : joi.string().required().valid("image/png", "image/jpg", "image/jpeg", "image/bmp").messages({
                    "any.allowOnly" : "Uniquement les images jpg, png, jpeg et bmp sont acceptees",
                }),
               size : joi.number().max(5*1024*1024).messages({
                    "number.max" : "La taille du fichier doit etre en dessous de 5Mo",
               }) 
        }).required().messages({
            "object.base" : "l'image du service est requis ",
            "any.required" : "L'image du service est requis "
        })
    
    });

    const {error} = schema.validate({...request.body, service_image: request.file ? {
        mimetype : request.file.mimetype,
        size: request.file.size,

    } : null}, {abortEarly: false});

    if(error) {

        const details = error.details.map(detail=>(
            {
                message: detail.message,
                path: detail.path.join(".")
            }
        ));
        
        console.log("Erreur lors de la validation pour l'ajout d'un service : ", details);
        
        // supprimer le fichier s'il y'a une erreur de validation
        if(request.file) {
            fs.unlink(request.file.path, (error)=>{
                if(error) throw "Une erreur c'est produite lors de la suppression du fichier " + error;
                console.log("le fichier uploader a ete supprime avec success ! ");
            })
        }


        return response.status(400).json(details);
    }

    console.log("Validation reussie pour l'ajout d'un service");
    return next();
};

//validation pour la mise a jour d'un service 
const updateServiceValidation = async function(request, response, next) {
    const schema = joi.object({
        service_name: joi.string().messages({
            "string.empty": "Le nom du service ne peut pas être vide",
        }),
        
        service_description: joi.string().messages({
            "string.empty": "La description ne peut pas être vide",
        }),
        service_image: joi.string().required().messages({
            "string.empty": "L'image du service ne peut pas être vide",
        }),
    
    });
    
    serviceModel.findById(request.query.id).then(function(service){
        if(!service){
            return response.status(404).json({message: "service non trouvé"});
        }
        const {error} = schema.validate({
            service_name: request.body.service_name || service.service_name,
            service_description: request.body.service_description || service.service_description,
            service_image : request.body.service_image || service.service_image,

        }, {abortEarly: false});
        if(error) {
            
            const details = error.details.map(detail=>(
                {
                    message: detail.message,
                    path: detail.path.join(".")
                }
            ));
    
            console.log("Erreur lors de la validation pour la mise a jour d'un service : ", details);
    
            return response.status(400).json({
                message: "Erreur de validation pour la mise a jour d'un service",
                details
            });
        }
        console.log("validation de la mise a jour du service reussit ");
        return next();
        
    }).catch(function(error){
        console.log("erreur lors de la validation pour la mise a jour d'un service ", error);
        return response.status(500).json({message: "erreur lors de la validation pour la mise a jour d'un service"});
    });

};

module.exports = {
    addServiceValidation,
    updateServiceValidation
};