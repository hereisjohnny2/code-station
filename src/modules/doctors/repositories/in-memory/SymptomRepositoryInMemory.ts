import { Symptom } from "../../infra/typeorm/entities/Symptom";
import { ISymptomRepository } from "../ISymptomRepository";

class SymptomRepositoryInMemory implements ISymptomRepository {
  private symptomes: Symptom[];

  constructor() {
    this.symptomes = [];
  }

  async create(name: string): Promise<Symptom> {
    const symptom = new Symptom();
    symptom.name = name;
    this.symptomes.push(symptom);
    return symptom;
  }

  async findById(id: string): Promise<Symptom> {
    const symptom = this.symptomes.find((symptom) => symptom.id === id);
    return symptom;
  }

  async list(): Promise<Symptom[]> {
    return this.symptomes;
  }

  async findByName(name: string): Promise<Symptom> {
    const symptom = await this.symptomes.find(
      (symptom) => symptom.name === name
    );

    return symptom;
  }

  async findByIds(ids: string[]): Promise<Symptom[]> {
    const symptom = await this.symptomes.filter((symptom) =>
      ids.includes(symptom.id)
    );

    return symptom;
  }
}
export { SymptomRepositoryInMemory };
