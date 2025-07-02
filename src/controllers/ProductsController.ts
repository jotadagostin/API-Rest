import { Request, Response } from "express";

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
    const { name, price } = request.body;

    response.status(201).json({ name, price, user_id: request.user_id });
  }
}

export { ProductsController };
