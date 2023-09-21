import { DeleteResult, UpdateResult } from "typeorm";
import { TipoUsuarioEntity } from "../../entities/TipoUsuario.entity";

export interface ITipoUsuarioRepository {
  create(tipo: string): Promise<TipoUsuarioEntity>;
  delete(id: string): Promise<DeleteResult>;
  load(): Promise<TipoUsuarioEntity[]>;
  loadSingle(id: string): Promise<TipoUsuarioEntity | undefined>;
  update(id: string, tipo?: string): Promise<UpdateResult>;
}
