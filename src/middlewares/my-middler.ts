import { Request, Response, NextFunction } from "express";

export function myMiddlerware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  console.log("It pass throw the middler!");

  return next();
}
