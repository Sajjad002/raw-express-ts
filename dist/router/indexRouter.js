"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = __importDefault(require("express"));
const indexController_1 = require("../controller/indexController");
exports.route = express_1.default.Router();
// * Set routes
exports.route.get("/", indexController_1.getIndex);
exports.route.get("/about", indexController_1.getAbout);
