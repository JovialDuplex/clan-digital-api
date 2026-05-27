const mongoose = require("mongoose");
const mongooseType = mongoose.SchemaTypes;

// schema pour les conversations entre les clients et les administrateurs
const conversationSchema = new mongoose.Schema({
    client_id: {
        type: mongooseType.ObjectId,
        ref: "User",
        required: true,
    },
    admin_id: {
        type: mongooseType.ObjectId,
        ref: "User",
        default: null,
    },
}, {
    timestamps: { createdAt: "created_at", updatedAt: false}    
});


// Message de la conversation
const messageSchema = new mongoose.Schema({
    conversation_id: {
        type: mongooseType.ObjectId,
        ref: "Conversation",
        required: true,
    },
    sender_id: {
        type: mongooseType.ObjectId,
        ref: "User",
        required: true,
    },
    message_content: {
        type: mongooseType.String,
        required: true,
    },
    is_read: {
        type: mongooseType.Boolean,
        default: false,
    },

}, {
    timestamps: { createdAt: "sent_at", updatedAt: false}    
});

module.exports = {
    Conversation: mongoose.model("Conversation", conversationSchema),
    Message: mongoose.model("Message", messageSchema)
};