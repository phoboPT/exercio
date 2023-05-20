import express from "express";

import { readFile } from "fs/promises";
const json = JSON.parse(
  await readFile(new URL("../data/data.json", import.meta.url))
);
const routes = express.Router();
const user = {
  name: "",
  email: "",
  password: "",
};
const users = [];

routes.post("/user", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = {
      name,
      email,
      password,
    };

    users.push(user);
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ error: [{ msg: `Algo errado aconteceu: ${error}` }] });
  }
});

routes.put(
  "/user",

  async (req, res) => {
    try {
      res.status(200).send(user);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ error: [{ msg: `Algo errado aconteceu: ${error}` }] });
    }
  }
);

routes.delete("/user", async (req, res) => {
  try {
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ error: [{ msg: `Algo errado aconteceu: ${error}` }] });
  }
});

routes.post(
  "/login",

  async (req, res) => {
    try {
      res.status(200).send({});
    } catch (e) {
      console.log(e);
      res
        .status(500)
        .send({ error: [{ msg: `Algo errado aconteceu: ${error}` }] });
    }
  }
);

routes.get("/users", async (req, res) => {
  try {
    res.status(200).send(json);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ error: [{ msg: `Algo errado aconteceu: ${error}` }] });
  }
});

export { routes };

