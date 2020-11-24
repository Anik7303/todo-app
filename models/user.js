const mongoose = require("mongoose");

const { USER } = require("./names");

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: String,
        username: String,
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        avatar: String,
    },
    { timestamps: true }
);

mongoose.model(USER, userSchema);
