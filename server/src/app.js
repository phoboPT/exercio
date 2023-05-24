import bodyParser from "body-parser";

import express from "express";

import cors from "cors";

import { userRoutes } from "./routes/user.js";
import { productsRouter } from "./routes/products.js";

const app = express();
const router = express.Router();
app.use(bodyParser.json());
app.set("trust proxy", true);
app.use(cors());

router.use(userRoutes);
router.use(productsRouter);

app.use("/api/", router);

app.all("*", async (req, res) => {
  res.send("Index, /BAD_URL, route don't exist in Auth");
});

export { app };

