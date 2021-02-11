const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minLength: 3,
            maxlength: 50,
            trim: true,
        },
        username: {
            type: String,
            required: true,
            minLength: 3,
            maxlength: 50,
            trim: true,
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("users", usersSchema);