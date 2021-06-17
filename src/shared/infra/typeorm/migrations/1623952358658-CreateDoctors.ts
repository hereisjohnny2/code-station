import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateDoctors1623952358658 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "doctors",
        columns: [
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
          },
          {
            name: "ratingCount",
            type: "numeric",
          },
          {
            name: "bio",
            type: "varchar",
          },
          {
            name: "category_id",
            type: "uuid",
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
