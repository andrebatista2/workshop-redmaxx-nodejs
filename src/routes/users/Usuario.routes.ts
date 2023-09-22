import { Router } from "express";
import { UsuarioController } from "../../modules/users/controllers/Usuario.controller";

const usuarioRoutes = Router();
const controller = new UsuarioController();

usuarioRoutes.post("/", controller.create);
usuarioRoutes.delete("/:id", controller.delete);
usuarioRoutes.get("/", controller.load);
usuarioRoutes.get("/:id", controller.loadSingle);
usuarioRoutes.put("/:id", controller.update);

export { usuarioRoutes };
