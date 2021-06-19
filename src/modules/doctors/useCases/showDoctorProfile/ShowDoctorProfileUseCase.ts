import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { Doctor } from "../../infra/typeorm/entities/Doctor";
import { IDoctorsRepository } from "../../repositories/IDoctorsRepository";

@injectable()
class ShowDoctorProfileUseCase {
  constructor(
    @inject("DoctorsRepository")
    private doctorsRespository: IDoctorsRepository
  ) {}

  async execute(id: string): Promise<Doctor> {
    const doctor = await this.doctorsRespository.findById(id);

    if (!doctor) {
      throw new AppError("Doctor not found!");
    }

    return doctor;
  }
}

export { ShowDoctorProfileUseCase };
