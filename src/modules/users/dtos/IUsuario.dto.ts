export interface ICreateUsuarioDTO {
  nome: string;
  senha: string;
  tipo: string;
}

export interface IUpdateUsuarioDTO {
  nome?: string;
  senha?: string;
  tipo?: string;
}
