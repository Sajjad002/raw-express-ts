import express, { Router } from "express";
import { getIndex } from "../controller/indexController";

export const route: Router = express.Router();

route.get("/", getIndex);
