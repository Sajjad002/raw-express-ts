import { Express, Request, Response, json } from "express";

// * Get routes
const getIndex = (req: Request, res: Response) => {
  // ? This handler is public
  res.status(200).json({ data: [{ message: "Welcome to raw-ts" }] });
};
const getAbout = (req: Request, res: Response) => {
  // ? This handler is public
  res.status(200).json({ data: [{ title: "About page !" }] });
};

export { getIndex, getAbout };
