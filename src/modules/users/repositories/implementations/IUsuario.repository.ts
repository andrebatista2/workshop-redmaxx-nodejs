import { DeleteResult, UpdateResult } from "typeorm";
import { UsuarioEntity } from "../../entities/Usuario.entity";
import {ICreateUsuarioDTO, IUpdateUsuarioDTO} from "../../dtos/IUsuario.dto";

export interface IUsuarioRepository {
  create(data: ICreateUsuarioDTO): Promise<UsuarioEntity>;
  delete(id: string): Promise<DeleteResult>;
  load(): Promise<UsuarioEntity[]>;
  loadSingle(id: string): Promise<UsuarioEntity | undefined>;
  update(id: string, data: IUpdateUsuarioDTO): Promise<UpdateResult>;
}
