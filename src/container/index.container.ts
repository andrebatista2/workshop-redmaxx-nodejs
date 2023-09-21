import { container } from "tsyringe";
import {ITipoUsuarioRepository} from "../modules/users/repositories/implementations/ITipoUsuario.repository";
import {TipoUsuarioRepository} from "../modules/users/repositories/TipoUsuario.repository";
import {IUsuarioRepository} from "../modules/users/repositories/implementations/IUsuario.repository";
import {UsuarioRepository} from "../modules/users/repositories/Usuario.repository";

container.registerSingleton<ITipoUsuarioRepository>(
  'TipoUsuario',
  TipoUsuarioRepository,
);

container.registerSingleton<IUsuarioRepository>(
  'Usuario',
  UsuarioRepository,
);
