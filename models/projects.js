const mongoose = require("mongoose");
const mongooseType = mongoose.SchemaTypes;

const projectSchema = new mongoose.Schema({
    project_name: {
        type: mongooseType.String,
        required: true,
        maxlength: 150,
        trim: true,
    },
    project_description: {
        type: mongooseType.String,
        required: true,
        default: null,
        maxlength: 500,
    },
    project_image: {
        type: mongooseType.String,
        default: null,
    },
    project_url: {
        type: mongooseType.String,
        default: null,
    },
    
    github_url: {
        type: mongooseType.String,
        default: null,
    },

    // pour les clients non enregistres qui avait commande un projet
    client_name: {
        type: mongooseType.String,
        required: true,
        maxlength: 150,
        trim: true,
    },

    // pour les clients enregistrers qui ont commande un projet
    client_id: {
        type: mongooseType.ObjectId,
        ref: "User",
        default: null,
    },

    service_id : {
        type: mongooseType.ObjectId,
        ref: "Service",
        required: true,
    },

    start_date: {
        type: mongooseType.Date,
        default: Date.now,
    },

    end_date: {
        type: mongooseType.Date,
        default: null,
    },

}, {
    timestamps: { createdAt: "created_at", updatedAt: false}
});

module.exports = mongoose.model("Project", projectSchema);