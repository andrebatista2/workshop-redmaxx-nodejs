import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TipoUsuarioEntity } from "./TipoUsuario.entity";

@Entity("usuarios")
export class UsuarioEntity {
  @PrimaryGeneratedColumn("uuid")
  id_usuario: string;

  @Column()
  nome_usuario: string;

  @Column()
  senha_usuario: string;

  @Column()
  id_tipo: string;

  @ManyToOne(() => TipoUsuarioEntity)
  @JoinColumn({ name: "id_tipo" })
  tipo_usuario: TipoUsuarioEntity;
}
