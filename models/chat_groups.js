const mongoose = require("mongoose");
const mongooseType = mongoose.SchemaTypes;

const chatGroupSchema = new mongoose.Schema({
    group_name: {
        type: mongooseType.String,
        required: true,
        maxlength: 150,
        trim: true,
    },
    created_by: {
        type: mongooseType.ObjectId,
        ref: "User",
        required: true,
    },
    members: [{
        type: mongooseType.ObjectId,
        ref: "User",
    }],
}, {
    timestamps: { createdAt: "created_at", updatedAt: false}    
});

const groupMessageSchema = new mongoose.Schema({
    group_id: {
        type: mongooseType.ObjectId,
        ref: 'chatGroup',
        required: true,
    },
    sender_id: {
        type: mongooseType.ObjectId,
        ref: 'User',
        required: true,
    },
    message_content: {
        type: mongooseType.String,
        required: true,
        default: null,
    },
    
    is_read: {
        type: mongooseType.Boolean,
        default: false,
    },

}, {
    timestamps: { createdAt: "sent_at", updatedAt: false}    
});



module.exports = {
    ChatGroup: mongoose.model("ChatGroup", chatGroupSchema),
    GroupMessage: mongoose.model("GroupMessage", groupMessageSchema)
};