import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { Symptom } from "../../infra/typeorm/entities/Symptom";
import { ISymptomRepository } from "../../repositories/ISymptomRepository";

@injectable()
class CreateSymptomUseCase {
  constructor(
    @inject("SymptomesRepository")
    private symptomesRepository: ISymptomRepository
  ) {}

  async execute(name: string): Promise<Symptom> {
    const alreadyTakenSymptomName = await this.symptomesRepository.findByName(
      name
    );

    if (alreadyTakenSymptomName) {
      throw new AppError("Name Already Taken!");
    }

    const symptom = await this.symptomesRepository.create(name);

    return symptom;
  }
}

export { CreateSymptomUseCase };
