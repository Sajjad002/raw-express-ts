"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAbout = exports.getIndex = void 0;
// * Get routes
const getIndex = (req, res) => {
    // ? This handler is public
    res.status(200).json({ data: [{ message: "Welcome to raw-ts" }] });
};
exports.getIndex = getIndex;
const getAbout = (req, res) => {
    // ? This handler is public
    res.status(200).json({ data: [{ title: "About page !" }] });
};
exports.getAbout = getAbout;
