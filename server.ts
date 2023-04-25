// * Module dependencies

import express, { Express, json } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { route as indexRouter } from "./router/indexRouter";

dotenv.config();

//TODO create server
const server: Express = express();

// * config setting on server
server.use(logger("dev"));
server.use(json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());

// * Set Routers
server.use("/", indexRouter);

// * Find Port
const Port = process.env.PORT || 8000;

server.listen(Port, () => {
  console.log(`Server run on port ${Port}`);
});
