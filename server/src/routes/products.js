import express from "express";

import { readFile } from "fs/promises";
const json = JSON.parse(
  await readFile(new URL("../data/products.json", import.meta.url))
);
const routes = express.Router();

routes.post("/products", async (req, res) => {
  try {
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ error: [{ msg: `Algo errado aconteceu: ${error}` }] });
  }
});

routes.put("/products", async (req, res) => {
  try {
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ error: [{ msg: `Algo errado aconteceu: ${error}` }] });
  }
});

routes.delete("/products", async (req, res) => {
  try {
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ error: [{ msg: `Algo errado aconteceu: ${error}` }] });
  }
});

routes.get("/products", async (req, res) => {
  try {
    res.status(200).send(json);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ error: [{ msg: `Algo errado aconteceu: ${error}` }] });
  }
});

export { routes as productsRouter };

