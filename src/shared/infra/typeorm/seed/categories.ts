import { v4 as uuidV4 } from "uuid";

import createConnection from "..";

import { Category } from "../../../../modules/doctors/infra/typeorm/entities/Category";
import { Symptom } from "../../../../modules/doctors/infra/typeorm/entities/Symptom";

const categoryValues = [
  { id: uuidV4(), name: "Cardiologia" },
  { id: uuidV4(), name: "Neurologia" },
  { id: uuidV4(), name: "Psiquiatria" },
  { id: uuidV4(), name: "Ortopedia" },
];

const symptomValues = [
  { id: uuidV4(), name: "Dor de Cabeça" },
  { id: uuidV4(), name: "Dores no Peito" },
  { id: uuidV4(), name: "Mãos Tremulas" },
  { id: uuidV4(), name: "Dores no Tornozelo" },
];

async function create() {
  const connection = await createConnection("localhost");

  await connection
    .createQueryBuilder()
    .insert()
    .into(Category)
    .values(categoryValues)
    .execute();

  await connection
    .createQueryBuilder()
    .insert()
    .into(Symptom)
    .values(symptomValues)
    .execute();

  await connection
    .createQueryBuilder()
    .insert()
    .into("symptomes_categories")
    .values([
      { category_id: categoryValues[0].id, symptom_id: symptomValues[1].id },
      { category_id: categoryValues[1].id, symptom_id: symptomValues[0].id },
      { category_id: categoryValues[1].id, symptom_id: symptomValues[2].id },
      { category_id: categoryValues[2].id, symptom_id: symptomValues[0].id },
      { category_id: categoryValues[3].id, symptom_id: symptomValues[3].id },
    ])
    .execute();

  await connection.close();
}

create().then(() => console.log("Categories Created"));
