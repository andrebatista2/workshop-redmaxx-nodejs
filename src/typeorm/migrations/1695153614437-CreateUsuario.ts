import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateUsuario1695153614437 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "usuarios",
        columns: [
          {
            name: "id_usuario",
            type: "varchar",
            length: "100",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "uuid",
            default: "(uuid())",
          },
          {
            name: "nome_usuario",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
          {
            name: "senha_usuario",
            type: "varchar",
            length: "150",
            isNullable: false,
          },
          {
            name: "id_tipo",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "usuarios",
      new TableForeignKey({
        name: "fk_tipo_usuario",
        columnNames: ["id_tipo"],
        referencedTableName: "tipo_usuario",
        referencedColumnNames: ["id_tipo"],
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("usuarios", "fk_tipo_usuario");
    await queryRunner.dropTable("usuarios");
  }
}
