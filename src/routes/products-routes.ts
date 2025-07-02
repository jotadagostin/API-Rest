import { Router } from "express";
import { myMiddlerware } from "../middlewares/my-middler";
import { ProductsController } from "../controllers/ProductsController";

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.get("/", productsController.index);

productsRouter.post("/", myMiddlerware, productsController.create);

export { productsRouter };
