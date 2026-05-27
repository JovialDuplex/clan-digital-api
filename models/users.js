const mongoose = require("mongoose");
const mongooseType = mongoose.SchemaTypes;

const userSchema = new mongoose.Schema({
    user_name: {
        type: mongooseType.String,
        required: true,
        maxlength: 150,
        trim: true,
    },
    user_email: {
        type: mongooseType.String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    user_password: {
        type: mongooseType.String,
        required: true,
        minlength: 6,
    },
    user_phone: {
        type: mongooseType.String,
        required: true,
        unique: true,
        trim: true,
        default: null,
        maxlength: 20,
    },
    user_role: {
        type: mongooseType.String,
        enum: ["user", "admin", "client"],
        default: "client",
    },
    user_profile_picture: {
        type: mongooseType.String,
        default: null,
    },

    user_is_available: {
        type: mongooseType.Boolean,
        default: true,
    },

}, {
    timestamps: { createdAt: "created_at", updatedAt: false}
});

module.exports = mongoose.model("User", userSchema);
