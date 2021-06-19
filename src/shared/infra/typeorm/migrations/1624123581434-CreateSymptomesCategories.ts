import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSymptomesCategories1624123581434
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "symptomes_categories",
        columns: [
          {
            name: "category_id",
            type: "uuid",
          },
          {
            name: "symptom_id",
            type: "uuid",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKSymptomCategory",
            referencedTableName: "symptomes",
            referencedColumnNames: ["id"],
            columnNames: ["symptom_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "FKCategorySymptom",
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
    await queryRunner.dropTable("symptomes_categories");
  }
}
