import { inject, injectable } from "tsyringe";

import { Doctor } from "../../infra/typeorm/entities/Doctor";
import { IDoctorsRepository } from "../../repositories/IDoctorsRepository";

@injectable()
class ListDoctorsUseCase {
  constructor(
    @inject("DoctorsRepository")
    private doctorsRepository: IDoctorsRepository
  ) {}

  async execute(category_id?: string): Promise<Doctor[]> {
    const users = await this.doctorsRepository.list(category_id);

    return users;
  }
}

export { ListDoctorsUseCase };
