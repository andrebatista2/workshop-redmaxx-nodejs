import { TipoUsuarioEntity } from "../entities/TipoUsuario.entity";
import { ITipoUsuarioRepository } from "./implementations/ITipoUsuario.repository";
import { Repository, getRepository, DeleteResult, UpdateResult } from "typeorm";

export class TipoUsuarioRepository implements ITipoUsuarioRepository {
  private readonly repository: Repository<TipoUsuarioEntity>;
  constructor() {
    this.repository = getRepository(TipoUsuarioEntity);
  }

  async create(tipo: string): Promise<TipoUsuarioEntity> {
    const saveData = this.repository.create({
      tipo_usuario: tipo,
    });
    await this.repository.save(saveData);
    return saveData;
  }

  async delete(id: string): Promise<DeleteResult> {
    return this.repository.delete({
      id_tipo: id,
    });
  }

  async load(): Promise<TipoUsuarioEntity[]> {
    return this.repository.find();
  }

  async loadSingle(id: string): Promise<TipoUsuarioEntity | undefined> {
    return this.repository.findOne({
      where: {
        id_tipo: id,
      },
    });
  }

  async loadTipo(tipo: string): Promise<TipoUsuarioEntity | undefined> {
    return this.repository.findOne({
      where: {
        tipo_usuario: tipo,
      },
    });
  }

  async update(id: string, tipo?: string | undefined): Promise<UpdateResult> {
    return this.repository.update({ tipo_usuario: tipo }, { id_tipo: id });
  }
}
