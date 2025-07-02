import { Request, Response, NextFunction } from "express";

export function myMiddlerware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  request.user_id = "12334";

  console.log("It pass throw the middler!");

  return next();
}
