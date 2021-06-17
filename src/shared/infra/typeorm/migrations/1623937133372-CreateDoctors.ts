import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateDoctors1623937133372 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "doctors",
        columns: [
          {
            name: "user_id",
            type: "uuid",
          },
          {
            name: "CRM",
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
            default: "0",
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
            name: "FKUser",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_id"],
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
