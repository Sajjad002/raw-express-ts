import express, { Router } from "express";
import { getAbout, getIndex } from "../controller/indexController";

export const route: Router = express.Router();

// * Set routes
route.get("/", getIndex);
route.get("/about", getAbout);
