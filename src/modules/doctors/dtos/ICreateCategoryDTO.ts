import { Symptom } from "../infra/typeorm/entities/Symptom";

interface ICreateCategoryDTO {
  id?: string;
  name: string;
  symptomes?: Symptom[];
}

export { ICreateCategoryDTO };
