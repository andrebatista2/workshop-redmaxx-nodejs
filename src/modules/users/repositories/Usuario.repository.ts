import { IUsuarioRepository } from "./implementations/IUsuario.repository";
import { ICreateUsuarioDTO, IUpdateUsuarioDTO } from "../dtos/IUsuario.dto";
import { UsuarioEntity } from "../entities/Usuario.entity";
import { Repository, getRepository, DeleteResult, UpdateResult } from "typeorm";

export class UsuarioRepository implements IUsuarioRepository {
  private readonly repository: Repository<UsuarioEntity>;
  constructor() {
    this.repository = getRepository(UsuarioEntity);
  }

  async create(data: ICreateUsuarioDTO): Promise<UsuarioEntity> {
    const saveData = this.repository.create({
      ...data,
    });
    await this.repository.save(saveData);
    return saveData;
  }

  async delete(id: string): Promise<DeleteResult> {
    return this.repository.delete({
      id_usuario: id,
    });
  }

  async load(): Promise<UsuarioEntity[]> {
    return this.repository.createQueryBuilder('u')
      .select(`
        u.id_usuario,
        u.nome_usuario,
        u.senha_usuario,
        u.id_tipo,
        t.tipo_usuario
      `)
      .leftJoin('tipo_usuarios', 't', 't.id_tipo = u.id_tipo')
      .getRawMany();
  }

  async loadSingle(id: string): Promise<UsuarioEntity | undefined> {
    return this.repository.createQueryBuilder('u')
      .select(`
        u.id_usuario,
        u.nome_usuario,
        u.senha_usuario,
        u.id_tipo,
        t.tipo_usuario
      `)
      .leftJoin('tipo_usuarios', 't', 't.id_tipo = u.id_tipo')
      .where('u.id_usuario = :id', { id })
      .getRawOne();
  }

  async update(id: string, data: IUpdateUsuarioDTO): Promise<UpdateResult> {
    return this.repository.update(
      { id_usuario: id },
      { ...data }
    );
  }
}
