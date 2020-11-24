const mongoose = require("mongoose");

const { TODO } = require("./names");

const Schema = mongoose.Schema;

const todoSchema = new Schema(
    {
        content: {
            type: String,
            required: true,
        },
        isDone: {
            type: Boolean,
            default: false,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "user",
        },
    },
    { timestamps: true }
);

mongoose.model(TODO, todoSchema);
