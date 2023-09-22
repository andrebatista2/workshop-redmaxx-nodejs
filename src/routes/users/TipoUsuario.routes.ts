import { Router } from "express";
import { TipoUsuarioController } from "../../modules/users/controllers/TipoUsuario.controller";

const tipoUsuarioRoutes = Router();
const controller = new TipoUsuarioController();

// * CREATE - POST
tipoUsuarioRoutes.post("/", controller.create);

// * EXCLUSÃO - DELETE
tipoUsuarioRoutes.delete("/:id", controller.delete);

// * CONSULTA - GET
tipoUsuarioRoutes.get("/", controller.load);

// * CONSULTA POR PARAM - GET
tipoUsuarioRoutes.get("/:id", controller.loadSingle);

// * ATUALIZAÇÃO - PUT OU PATCH
tipoUsuarioRoutes.put("/:id", controller.update);

export { tipoUsuarioRoutes };
