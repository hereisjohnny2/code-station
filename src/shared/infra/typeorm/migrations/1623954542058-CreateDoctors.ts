import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateDoctors1623954542058 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "doctors",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "user_id",
            type: "uuid",
            isUnique: true,
          },
          {
            name: "crm",
            type: "numeric",
          },
          {
            name: "uf",
            type: "varchar",
          },
          {
            name: "clinicAdress",
            type: "varchar",
          },
          {
            name: "availableAgenda",
            type: "varchar",
          },
          {
            name: "rating",
            type: "numeric",
            default: "0",
          },
          {
            name: "ratingCount",
            type: "numeric",
            default: "0",
          },
          {
            name: "bio",
            type: "text",
          },
          {
            name: "category_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKUserDoctor",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "FKCategoryDoctor",
            referencedTableName: "categories",
            referencedColumnNames: ["id"],
            columnNames: ["category_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("doctors");
  }
}
