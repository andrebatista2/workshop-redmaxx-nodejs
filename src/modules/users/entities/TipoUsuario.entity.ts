import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tipo_usuario")
export class TipoUsuarioEntity {
  @PrimaryGeneratedColumn("uuid")
  id_tipo: string;

  @Column()
  tipo_usuario: string;
}
