const mongoose = require("mongoose");
const mongooseType = mongoose.SchemaTypes;

const serviceSchema = new mongoose.Schema({
    service_name: {
        type: mongooseType.String,
        required: true,
        maxlength: 150,
        trim: true,
    },
    service_description: {
        type: mongooseType.String,
        required: true,
        trim: true,
    },
    service_price: {
        type: mongooseType.Number,
        required: true,
    },
    service_image: {
        type: mongooseType.String,
        default: null,
    },
    service_is_available: {
        type: mongooseType.Boolean,
        default: true,
    },

}, {
    timestamps: { createdAt: "created_at", updatedAt: false}
});

module.exports = mongoose.model("Service", serviceSchema);  