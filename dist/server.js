"use strict";
// * Module dependencies
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const indexRouter_1 = require("./router/indexRouter");
const dbConnection_1 = require("./config/dbConnection");
dotenv_1.default.config();
// * Connect Database
(0, dbConnection_1.connectDB)();
//TODO create server
const server = (0, express_1.default)();
// * config setting on server
server.use((0, morgan_1.default)("dev"));
server.use((0, express_1.json)());
server.use(express_1.default.urlencoded({ extended: false }));
server.use((0, cookie_parser_1.default)());
// * Set Routers
server.use("/", indexRouter_1.route);
// * Find Port
const Port = process.env.PORT || 8000;
server.listen(Port, () => {
    console.log(`Server run on port ${Port}`);
});
