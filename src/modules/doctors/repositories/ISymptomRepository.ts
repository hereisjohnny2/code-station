import { Symptom } from "../infra/typeorm/entities/Symptom";

interface ISymptomRepository {
  create(name: string): Promise<Symptom>;
  findById(id: string): Promise<Symptom>;
  findByName(name: string): Promise<Symptom>;
  list(): Promise<Symptom[]>;
}

export { ISymptomRepository };
