const mongoose = require("mongoose");
const mongooseType = mongoose.SchemaTypes;

const admissionRequestSchema = new mongoose.Schema({
    user_name : {
        type: mongooseType.String,
        required: true,
        maxlength: 150,
        trim: true,
    },
    user_email : {
        type: mongooseType.String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    user_portfolio_link : {
        type: mongooseType.String,
        trim: true,
    },

    user_phone : {
        type: mongooseType.String,
        required: true,
        unique: true,
        trim: true,
        default: null,
        maxlength: 20,
    },
    
    user_profession : {
        type: mongooseType.String,
        required: true,
        trim: true,
    },

    user_cvfile: {
        type: mongooseType.String,
        required: true,
        default: null,
    },

    user_motivation : {
        type: mongooseType.String,
        required: true,
        trim: true,
    },
    
    request_status : {
        type: mongooseType.String,
        enum: ["pending", "approved", "rejected"],
        default: "pending",
    },

    reviewed_by : {
        // savoir quel utilisateur a traiter la demande d'admission
        type: mongooseType.ObjectId,
        ref: "User",
        default: null,
    },

}, {
    timestamps: { createdAt: "created_at", updatedAt: false}        
});

module.exports = mongoose.model("AdmissionRequest", admissionRequestSchema);