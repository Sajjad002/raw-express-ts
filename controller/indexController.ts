import { Express, Request, Response, json } from "express";

const getIndex = (req: Request, res: Response) => {
  res.status(200).json({ data: [{ message: "Welcome to raw-ts" }] });
};

export { getIndex };
