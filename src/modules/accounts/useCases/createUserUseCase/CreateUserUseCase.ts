import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../respositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository
  ) {}

  async execute({
    name,
    email,
    password,
    telefone,
  }: ICreateUserDTO): Promise<void> {
    if (password.length < 6) {
      throw new AppError("Password should have at least 6 characters.");
    }

    const emailAlreadyInUse = await this.userRepository.findByEmail(email);
    if (emailAlreadyInUse) {
      throw new AppError("This email is already in use!");
    }
    const passwordHash = await hash(password, 8);

    await this.userRepository.create({
      name,
      email,
      password: passwordHash,
      telefone,
    });
  }
}

export { CreateUserUseCase };
