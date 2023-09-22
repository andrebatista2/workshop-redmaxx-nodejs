import { inject, injectable } from "tsyringe";
import { ITipoUsuarioRepository } from "../repositories/implementations/ITipoUsuario.repository";
import { TipoUsuarioEntity } from "../entities/TipoUsuario.entity";
import { AppError } from "../../../errors/App.error";
import { DeleteResult } from "typeorm";

@injectable()
export class TipoUsuarioUsecase {
  constructor(
    @inject("TipoUsuario")
    private readonly repository: ITipoUsuarioRepository
  ) {}

  async create(tipo: string): Promise<TipoUsuarioEntity> {
    if (!tipo) {
      throw new AppError("Informe um usuário");
    }

    const dataExists = await this.repository.loadTipo(tipo);
    if (dataExists) {
      throw new AppError("Dado existente na base");
    }

    return this.repository.create(tipo);
  }

  async delete(id: string): Promise<DeleteResult> {
    if (!id) {
      throw new AppError("Informe o identificador do Tipo");
    }

    const load = await this.repository.loadSingle(id);
    if (!load) {
      throw new AppError(
        "O tipo informado não foi localizado na base de dados",
        404
      );
    }

    return this.repository.delete(id);
  }
}
