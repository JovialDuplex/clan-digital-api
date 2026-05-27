const joi = require("joi");

// Validation pour l'ajout d'un service
const addServiceValidation = function(request, response, next) {
    const schema = joi.object({
        service_name: joi.string().required().messages({
            "string.empty": "Le nom du service ne peut pas être vide",
            "any.required": "Le nom du service est requis"
        }),
        slug: joi.string().required().messages({
            "string.empty": "Le slug ne peut pas être vide",
            "any.required": "Le slug est requis"
        }),
        description: joi.string().required().messages({
            "string.empty": "La description ne peut pas être vide",
            "any.required": "La description est requise"
        }),
        cover_image: joi.string().required().messages({
            "string.empty": "L'image de couverture ne peut pas être vide",
            "any.required": "L'image de couverture est requise"
        }),
    
    });
    const {error} = schema.validate(request.body, {abortEarly: false});
    if(error) {
        
        const details = error.details.map(detail=>(
            {
                message: detail.message,
                path: detail.path.join(".")
            }
        ));

        console.log("Erreur lors de la validation pour l'ajout d'un service : ", details);

        return response.status(400).json(details);
    }

    console.log("Validation reussie pour l'ajout d'un service");
    return next();
};

module.exports = {
    addServiceValidation
};