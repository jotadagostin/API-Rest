import { Request, Response } from "express";
import { AppError } from "../utils/AppError";
import { z } from "zod";

class ProductsController {
  //* index - get para listar varios registros
  //* show - get para exibir um registro especifico
  //* create- POST para criar um registro
  //* update - PUT para atualizar um registro
  //* remove - DELETE para deletrar um registro

  index(request: Request, response: Response) {
    const { page, limit } = request.query;

    response.send(`Page ${page} de ${limit}  `);
  }

  create(request: Request, response: Response) {
    const bodySchema = z.object({
      name: z
        .string({ required_error: "Name is required" })
        .min(6, { message: "Name must be 6 or more characters" }),
      price: z.number({ required_error: "Price is required" }),
    });

    const { name, price } = bodySchema.parse(request.body);
    // if (!name) {
    //   throw new AppError("Name is required!");
    // }

    // if (name.trim().length < 6) {
    //   throw new AppError("Name has to long enought(6 caracters)");
    // }

    // if (!price) {
    //   throw new AppError("Price is required!");
    // }

    // if (price < 0) {
    //   throw new AppError("Price can not be negative");
    // }

    // throw new Error("ERRO AO TENTAR CRIAR UM PRODUTO!");
    // throw new AppError("Error when tried to creat the product!");

    response.status(201).json({ name, price, user_id: request.user_id });
  }
}

export { ProductsController };
