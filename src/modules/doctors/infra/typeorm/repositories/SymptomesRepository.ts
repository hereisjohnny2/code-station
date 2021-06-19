import { getRepository, Repository } from "typeorm";

import { ISymptomRepository } from "../../../repositories/ISymptomRepository";
import { Symptom } from "../entities/Symptom";

class SymptomesRepository implements ISymptomRepository {
  private repository: Repository<Symptom>;

  constructor() {
    this.repository = getRepository(Symptom);
  }

  async create(name: string): Promise<Symptom> {
    const symptom = this.repository.create({
      name,
    });
    await this.repository.save(symptom);
    return symptom;
  }

  async findById(id: string): Promise<Symptom> {
    const symptom = await this.repository.findOne(id);
    return symptom;
  }

  async findByName(name: string): Promise<Symptom> {
    const symptom = await this.repository.findOne({ name });
    return symptom;
  }

  async findByIds(ids: string[]): Promise<Symptom[]> {
    const symptomes = await this.repository.findByIds(ids);
    return symptomes;
  }

  async list(): Promise<Symptom[]> {
    const symptomes = await this.repository.find();
    return symptomes;
  }
}

export { SymptomesRepository };
