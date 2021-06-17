import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { IUsersRepository } from "../../../accounts/respositories/IUsersRepository";
import { ICreateDoctorDTO } from "../../dtos/ICreateDoctorDTO";
import { Doctor } from "../../infra/typeorm/entities/Doctor";
import { IDoctorsRepository } from "../../repositories/IDoctorsRepository";

@injectable()
class CreateDoctorUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
    @inject("DoctorsRepository")
    private doctorsRepository: IDoctorsRepository
  ) {}

  async execute({
    user_id,
    crm,
    availableAgenda,
    clinicAdress,
    bio,
    category_id,
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
      bio,
      category_id,
    });

    return user;
  }
}

export { CreateDoctorUseCase };
