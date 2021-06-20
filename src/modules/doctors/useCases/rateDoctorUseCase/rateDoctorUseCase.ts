import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { IDoctorsRepository } from "../../repositories/IDoctorsRepository";

interface IRateInput {
  doctor_id: string;
  rate: number;
}

@injectable()
class RateDoctorUseCase {
  constructor(
    @inject("DoctorsRepository")
    private doctorsRepository: IDoctorsRepository
  ) {}

  async execute({ doctor_id, rate }: IRateInput): Promise<void> {
    const doctor = await this.doctorsRepository.findById(doctor_id);

    if (!doctor) {
      throw new AppError("Doctor not found with such ID");
    }

    const accumulatedRate = doctor.rating * doctor.ratingCount;
    doctor.ratingCount += 1;
    doctor.rating = (accumulatedRate + rate) / doctor.ratingCount;

    await this.doctorsRepository.create(doctor);
  }
}

export { RateDoctorUseCase };
