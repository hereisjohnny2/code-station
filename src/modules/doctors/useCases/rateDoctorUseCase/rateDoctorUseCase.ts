import { AppError } from "../../../../shared/errors/AppError";
import { IDoctorsRepository } from "../../repositories/IDoctorsRepository";

interface IRateInput {
  doctor_id: string;
  rate: number;
}

class RateDoctorUseCase {
  constructor(private doctorsRepository: IDoctorsRepository) {}

  async execute({ doctor_id, rate }: IRateInput): Promise<void> {
    const doctor = await this.doctorsRepository.findById(doctor_id);

    if (!doctor) {
      throw new AppError("Doctor not found with such ID");
    }

    doctor.rating = rate;
    doctor.ratingCount += 1;

    await this.doctorsRepository.create(doctor);
  }
}

export { RateDoctorUseCase };
