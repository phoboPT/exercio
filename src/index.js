import { app } from "./app.js";

const start = async () => {
  try {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Servidor a correr na porta ${process.env.PORT || 3000}`);
    });
  } catch (err) {
    console.log(`Erro: ${err}`);
  }
};
start();

