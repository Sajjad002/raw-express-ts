"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIndex = void 0;
const getIndex = (req, res) => {
    res.status(200).json({ data: [{ message: "Welcome to raw-ts" }] });
};
exports.getIndex = getIndex;
