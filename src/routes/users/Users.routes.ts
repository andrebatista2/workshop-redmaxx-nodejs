import { Router } from "express";
import { tipoUsuarioRoutes } from "./TipoUsuario.routes";

const userRoutes = Router();

userRoutes.use("/tipo-usuario", tipoUsuarioRoutes);

export { userRoutes };
