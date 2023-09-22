import { inject, injectable } from "tsyringe";
import { ITipoUsuarioRepository } from "../repositories/implementations/ITipoUsuario.repository";
import { IUsuarioRepository } from "../repositories/implementations/IUsuario.repository";
import { ICreateUsuarioDTO, IUpdateUsuarioDTO } from "../dtos/IUsuario.dto";
import { UsuarioEntity } from "../entities/Usuario.entity";
import { AppError } from "../../../errors/App.error";
import { DeleteResult, UpdateResult } from "typeorm";

@injectable()
export class UsuarioUsecase {
  constructor(
    @inject("Usuario")
    private readonly repository: IUsuarioRepository,

    @inject("TipoUsuario")
    private readonly tipoUsuario: ITipoUsuarioRepository
  ) {}

  async create(data: ICreateUsuarioDTO): Promise<UsuarioEntity> {
    if (!data.nome_usuario) {
      throw new AppError("Informe o nome do usuário");
    }

    if (!data.senha_usuario) {
      throw new AppError("Informe a senha do usuário");
    }

    if (!data.id_tipo) {
      throw new AppError("Informe o tipo de usuário");
    } else {
      const tipo = await this.tipoUsuario.loadSingle(data.id_tipo);
      if (!tipo) {
        throw new AppError("O tipo de usuário informado não existe", 404);
      }
    }

    const dataExists = await this.repository.loadNome(data.nome_usuario);
    if (dataExists) {
      throw new AppError("O usuário já está cadastrado!");
    }

    return this.repository.create(data);
  }

  async delete(id: string): Promise<DeleteResult> {
    if (!id) {
      throw new AppError("Informe o identificador do usuário");
    }

    const user = await this.repository.loadSingle(id);
    if (!user) {
      throw new AppError("O usuário informado não existe", 404);
    }

    return this.repository.delete(user.id_usuario);
  }

  async load(): Promise<UsuarioEntity[]> {
    const data = await this.repository.load();
    if (data.length === 0) {
      throw new AppError(
        "Não existem usuários cadastrados na base de dados",
        404
      );
    }

    return data;
  }

  async loadSingle(id: string): Promise<UsuarioEntity> {
    if (!id) {
      throw new AppError("Informe o identificador do usuário");
    }

    const data = await this.repository.loadSingle(id);
    if (!data) {
      throw new AppError(
        "Não existem usuários cadastrados na base de dados para este ID",
        404
      );
    }

    return data;
  }

  async update(id: string, data: IUpdateUsuarioDTO): Promise<UpdateResult> {
    if (!id) {
      throw new AppError("Informe o identificador do usuário");
    }

    const usuario = await this.repository.loadSingle(id);
    if (!usuario) {
      throw new AppError(
        "Não existem usuários cadastrados na base de dados para este ID",
        404
      );
    }

    if (data.nome_usuario) {
      usuario.nome_usuario = data.nome_usuario;
    }

    if (data.senha_usuario) {
      usuario.senha_usuario = data.senha_usuario;
    }

    if (data.id_tipo) {
      const tipo = await this.tipoUsuario.loadSingle(data.id_tipo);
      if (!tipo) {
        throw new AppError("O tipo de usuário informado não existe", 404);
      }
      usuario.id_tipo = data.id_tipo;
    }

    return this.repository.update(usuario.id_usuario, { ...usuario });
  }
}
