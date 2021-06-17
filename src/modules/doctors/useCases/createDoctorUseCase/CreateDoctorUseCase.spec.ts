import { AppError } from "../../../../shared/errors/AppError";
import { UsersRepositoryInMemory } from "../../../accounts/respositories/in-memory/UsersRepositoryInMemory";
import { IUsersRepository } from "../../../accounts/respositories/IUsersRepository";
import { IDoctorsRepository } from "../../repositories/IDoctorsRepository";
import { DoctorsRepositoryInMemory } from "../../repositories/in-memory/DoctorsRepositoryInMemory";
import { CreateDoctorUseCase } from "./CreateDoctorUseCase";

let usersRepository: IUsersRepository;
let doctorsRepository: IDoctorsRepository;
let createDoctorUseCase: CreateDoctorUseCase;

describe("Create Doctor", () => {
  beforeEach(() => {
    usersRepository = new UsersRepositoryInMemory();
    doctorsRepository = new DoctorsRepositoryInMemory();
    createDoctorUseCase = new CreateDoctorUseCase(
      usersRepository,
      doctorsRepository
    );
  });

  it("should be able to create a new doctor from and valid user id", async () => {
    const user = await usersRepository.create({
      name: "User1",
      email: "user@mail.com",
      password: "userpass",
      telefone: "22222222",
    });

    const doctor = await createDoctorUseCase.execute({
      user_id: user.id,
      crm: 123456789,
      clinicAdress: "St. A, 123",
      availableAgenda: "Mon. 18:00 - 20:00",
      bio: "User's Bio",
    });

    expect(doctor).toHaveProperty("user_id");
  });

  it("should not be able to create a new doctor from a now existent user", () => {
    expect(async () => {
      await createDoctorUseCase.execute({
        user_id: "fakeUserId",
        crm: 123456789,
        clinicAdress: "St. A, 123",
        bio: "User's Bio",
        availableAgenda: "Mon. 18:00 - 20:00",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
