import { Router } from "express";
import { TipoUsuarioController } from "../../modules/users/controllers/TipoUsuario.controller";

const tipoUsuarioRoutes = Router();
const controller = new TipoUsuarioController();

// * CREATE - POST
tipoUsuarioRoutes.post("/", controller.create);

// * EXCLUSÃO - DELETE
tipoUsuarioRoutes.delete("/:id", controller.delete);

export { tipoUsuarioRoutes };
