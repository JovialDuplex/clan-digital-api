const mongoose = require("mongoose");
const mongooseType = mongoose.SchemaTypes;

const serviceRequestSchema = new mongoose.Schema({
    client_name: {
        type: mongooseType.String,
        required: true,
        maxlength: 150,
        trim: true,
    },
    client_email: {
        type: mongooseType.String,
        required: true,
        lowercase: true,
        trim: true,
    },
    client_phone: {
        type: mongooseType.String,
        required: true,
        trim: true,
        default: null,
        maxlength: 20,
    },
    subject: {
        type: mongooseType.String,
        required: true,
        default: null,
        maxlength: 200,
    },
    message: {
        type: mongooseType.String,
        required: true,
        default: null,
        maxlength: 500,
    },
    service_id : {
        type: mongooseType.ObjectId,
        ref: "Service",
        required: true,
    },
    request_status: {
        type: mongooseType.String,
        enum: ["pending", "in_progress", "completed", "rejected"],
        default: "pending",
    },
}, {
    timestamps: { createdAt: "created_at", updatedAt: false}    
});

module.exports = mongoose.model("ServiceRequest", serviceRequestSchema);