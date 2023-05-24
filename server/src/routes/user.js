import express from "express";

import { readFile } from "fs/promises";
const json = JSON.parse(
  await readFile(new URL("../data/data.json", import.meta.url))
);
const routes = express.Router();

const users = [];

routes.post("/user", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      return res.status(400).send({ error: [{ msg: "Utilizador já existe" }] });
    }

    const newUser = {
      name,
      email,
      password,
    };

    users.push(newUser);
    res.status(200).send(newUser);
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
      const { name, email, password } = req.body;
      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (!user) {
        return res
          .status(400)
          .send({ error: [{ msg: "Utilizador não existe" }] });
      }

      const index = users.findIndex(
        (user) => user.email === email && user.password === password
      );

      users[index] = {
        name: name ? name : user.name,
        email: email ? email : user.email,
        password: password ? password : user.password,
      };

      res.status(200).send(users[index]);
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

routes.post("/login", async (req, res) => {
  try {
    const { name, email } = req.body;
    console.log(name, email);
    const user = json.find(
      (user) => user.email === email && user.name === name
    );
    if (!user) {
      return res
        .status(400)
        .send({ error: [{ msg: "Utilizador ou senha inválidos" }] });
    }
    res.status(200).send(user);
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .send({ error: [{ msg: `Algo errado aconteceu: ${error}` }] });
  }
});

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

export { routes as userRoutes };

