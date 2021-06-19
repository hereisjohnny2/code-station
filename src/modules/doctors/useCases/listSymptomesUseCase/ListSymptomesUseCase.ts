import { inject, injectable } from "tsyringe";

import { Symptom } from "../../infra/typeorm/entities/Symptom";
import { ISymptomRepository } from "../../repositories/ISymptomRepository";

@injectable()
class ListSymptomesUseCase {
  constructor(
    @inject("SymptomesRepository")
    private symptomesRepository: ISymptomRepository
  ) {}

  async execute(): Promise<Symptom[]> {
    const symptomes = await this.symptomesRepository.list();
    return symptomes;
  }
}

export { ListSymptomesUseCase };
