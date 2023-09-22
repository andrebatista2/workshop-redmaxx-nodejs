import { Router } from "express";
import { userRoutes } from "./users/Users.routes";

const routes = Router();

routes.use("/users", userRoutes);

export { routes };
