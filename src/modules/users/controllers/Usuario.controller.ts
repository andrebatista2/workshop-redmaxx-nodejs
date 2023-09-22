import { Request, Response } from "express";
import { UsuarioUsecase } from "../usecases/Usuario.usecase";
import { container } from "tsyringe";

export class UsuarioController {
  async create(req: Request, res: Response): Promise<Response> {
    const { nome, senha, tipo } = req.body;
    const repository = container.resolve(UsuarioUsecase);
    const data = await repository.create({
      nome_usuario: nome,
      senha_usuario: senha,
      id_tipo: tipo,
    });

    return res.status(201).json(data);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const repository = container.resolve(UsuarioUsecase);
    const data = await repository.delete(id);

    return res.json(data);
  }

  async load(_req: Request, res: Response): Promise<Response> {
    const repository = container.resolve(UsuarioUsecase);
    const data = await repository.load();

    return res.json(data);
  }

  async loadSingle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const repository = container.resolve(UsuarioUsecase);
    const data = await repository.loadSingle(id);

    return res.json(data);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { nome, senha, tipo } = req.body;
    const repository = container.resolve(UsuarioUsecase);
    const data = await repository.update(id, {
      nome_usuario: nome,
      senha_usuario: senha,
      id_tipo: tipo,
    });

    return res.json(data);
  }
}
