export interface ICreateUsuarioDTO {
  nome_usuario: string;
  senha_usuario: string;
  id_tipo: string;
}

export interface IUpdateUsuarioDTO {
  nome_usuario?: string;
  senha_usuario?: string;
  id_tipo?: string;
}
