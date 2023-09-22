import { Router } from "express";
import { tipoUsuarioRoutes } from "./TipoUsuario.routes";
import { usuarioRoutes } from "./Usuario.routes";

const userRoutes = Router();

userRoutes.use("/tipo-usuario", tipoUsuarioRoutes);
userRoutes.use("/usuarios", usuarioRoutes);

export { userRoutes };
