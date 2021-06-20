import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { IUsersRepository } from "../../../accounts/respositories/IUsersRepository";
import { ICreateDoctorDTO } from "../../dtos/ICreateDoctorDTO";
import { Doctor } from "../../infra/typeorm/entities/Doctor";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { IDoctorsRepository } from "../../repositories/IDoctorsRepository";

@injectable()
class CreateDoctorUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
    @inject("DoctorsRepository")
    private doctorsRepository: IDoctorsRepository,
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute({
    user_id,
    crm,
    availableAgenda,
    clinicAdress,
    bio,
    category_id,
    uf,
  }: ICreateDoctorDTO): Promise<Doctor> {
    const userExists = await this.usersRepository.findById(user_id);

    if (!userExists) {
      throw new AppError("User does not exists");
    }

    const category = await this.categoriesRepository.findById(category_id);

    if (!category) {
      throw new AppError("Category Does not Exists");
    }

    const user = await this.doctorsRepository.create({
      user_id,
      crm,
      availableAgenda,
      clinicAdress,
      bio,
      category_id,
      uf,
      user: userExists,
      category,
    });

    return user;
  }
}

export { CreateDoctorUseCase };
