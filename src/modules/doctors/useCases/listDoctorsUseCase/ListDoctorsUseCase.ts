import { Doctor } from "../../infra/typeorm/entities/Doctor";
import { IDoctorsRepository } from "../../repositories/IDoctorsRepository";

class ListDoctorsUseCase {
  constructor(private doctorsRepository: IDoctorsRepository) {}

  async execute(): Promise<Doctor[]> {
    const users = await this.doctorsRepository.list();

    return users;
  }
}

export { ListDoctorsUseCase };
