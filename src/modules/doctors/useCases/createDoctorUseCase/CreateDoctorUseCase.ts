import { AppError } from "../../../../shared/errors/AppError";
import { IUsersRepository } from "../../../accounts/respositories/IUsersRepository";
import { ICreateDoctorDTO } from "../../dtos/CreateDoctorDTO";
import { Doctor } from "../../infra/typeorm/entities/Doctor";
import { IDoctorsRepository } from "../../repositories/IDoctorsRepository";

class CreateDoctorUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private doctorsRepository: IDoctorsRepository
  ) {}

  async execute({
    user_id,
    crm,
    availableAgenda,
    clinicAdress,
  }: ICreateDoctorDTO): Promise<Doctor> {
    const userExists = await this.usersRepository.findById(user_id);

    if (!userExists) {
      throw new AppError("User does not exists");
    }

    const user = await this.doctorsRepository.create({
      user_id,
      crm,
      availableAgenda,
      clinicAdress,
    });

    return user;
  }
}

export { CreateDoctorUseCase };
