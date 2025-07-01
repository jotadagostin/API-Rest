import express from "express";
import { myMiddlerware } from "./middlewares/my-middler";

const PORT = 3333;

const app = express();

app.use(express.json());
//global middler: apply for every route
// app.use(myMiddlerware);

app.get("/products", (request, response) => {
  const { page, limit } = request.query;
  response.send(`Page ${page} de ${limit} `);
});

app.post("/products", myMiddlerware, (request, response) => {
  const { name, price } = request.body;

  //   response.send(`Product ${name} cost $ ${price}`);
  response.status(201).json({ name, price });
});

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
