import { Request, Response } from "express";
import { TipoUsuarioUsecase } from "../usecases/TipoUsuario.usecase";
import { container } from "tsyringe";

export class TipoUsuarioController {
  async create(req: Request, res: Response): Promise<Response> {
    const { tipo } = req.body;
    const repository = container.resolve(TipoUsuarioUsecase);
    const data = await repository.create(tipo);

    return res.status(201).json(data);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const repository = container.resolve(TipoUsuarioUsecase);
    const data = await repository.delete(id);

    return res.status(200).json(data);
  }

  async load(_req: Request, res: Response): Promise<Response> {
    const repository = container.resolve(TipoUsuarioUsecase);
    const data = await repository.load();

    return res.json({
      acknowledge: true,
      content: data,
    });
  }

  async loadSingle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const repository = container.resolve(TipoUsuarioUsecase);
    const data = await repository.loadSingle(id);

    return res.json({
      acknowledge: true,
      content: data,
    });
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { tipo } = req.body;
    const repository = container.resolve(TipoUsuarioUsecase);
    const data = await repository.update(id, tipo);

    return res.json(data);
  }
}
