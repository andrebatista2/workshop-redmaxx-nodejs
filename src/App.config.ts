import "reflect-metadata";
import express from "express";
import "express-async-errors";
import createConnection from "./typeorm/index.config";
import morgan from "morgan";
import cors from "cors";

createConnection()
  .then(() => console.log("Conectado ao banco de dados"))
  .catch((e) => console.log(`Erro: ${e.message}`));

const app = express();
app.use(express.json());
app.use(morgan("combined"));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    maxAge: 36400,
  })
);

app.get("/", (_request, response) => {
  return response.json({ mensagem: "Olá, API" });
});

export { app };
