import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import createConnection from "./typeorm/index.config";
import morgan from "morgan";
import cors from "cors";
import { AppError } from "./errors/App.error";
import { routes } from "./routes/index.routes";
import "./container/index.container";

createConnection()
  .then(() => console.log("Conectado ao banco de dados"))
  .catch((e) => console.log(`Erro: ${e.message}`));

const app = express();
app.use(express.json());
app.use(morgan("combined"));
app.use("/api/v1", routes);
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    maxAge: 36400,
  })
);

app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.status).json({
      message: err.message,
    });
  }

  return res.status(500).json({
    message: err.message,
  });
});

export { app };
