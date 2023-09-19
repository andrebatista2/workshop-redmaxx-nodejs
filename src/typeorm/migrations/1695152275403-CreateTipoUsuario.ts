import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTipoUsuario1695152275403 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "tipo_usuario",
        columns: [
          {
            name: "id_tipo",
            type: "varchar",
            length: "100",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "uuid",
            default: "(uuid())",
          },
          {
            name: "tipo_usuario",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("tipo_usuario");
  }
}
