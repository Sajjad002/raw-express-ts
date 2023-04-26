"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// * 2.Create a Schema corresponding to the document interface.
const userSchema = new mongoose_1.Schema({
    username: { type: String, required: [true, "username is required"] },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
}, {
    timestamps: true,
});
// * 3.Create a Model.
const User = (0, mongoose_1.model)("User", userSchema);
exports.default = User;
