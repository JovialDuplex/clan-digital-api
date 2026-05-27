const mongoose = require("mongoose");
const mongooseType = mongoose.SchemaTypes;

const testimonialSchema = new mongoose.Schema({
    // pour les clients non enregistres qui veulent laisser un temoignage
    client_name: {
        type: mongooseType.String,
        required: true,
        maxlength: 150,
        trim: true,
    },
    message : {
        type: mongooseType.String,
        required: true,
        default: null,
        maxlength: 500,
    },
    rating: {
        type: mongooseType.Number,
        required: true,
        default: 5,
        min: 1,
        max: 5,
    },
    client_picture: {
        type: mongooseType.String,
        default: null,
    },
    // pour les clients enregistrers qui veulent laisser un temoignage
    client_id: {
        type: mongooseType.ObjectId,
        ref: "User",
        default: null,
    },
    
    company_name: {
        type: mongooseType.String,
        default: null,
        maxlength: 150,
        trim: true,
    },

}, {
    timestamps: { createdAt: "created_at", updatedAt: false}    
});