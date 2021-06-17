import { AppError } from "../../../../shared/errors/AppError";
import { UsersRepositoryInMemory } from "../../../accounts/respositories/in-memory/UsersRepositoryInMemory";
import { IUsersRepository } from "../../../accounts/respositories/IUsersRepository";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { IDoctorsRepository } from "../../repositories/IDoctorsRepository";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoryRepositoryInMemory";
import { DoctorsRepositoryInMemory } from "../../repositories/in-memory/DoctorsRepositoryInMemory";
import { CreateDoctorUseCase } from "./CreateDoctorUseCase";

let usersRepository: IUsersRepository;
let doctorsRepository: IDoctorsRepository;
let categoryRepository: ICategoriesRepository;
let createDoctorUseCase: CreateDoctorUseCase;

describe("Create Doctor", () => {
  beforeEach(() => {
    usersRepository = new UsersRepositoryInMemory();
    doctorsRepository = new DoctorsRepositoryInMemory();
    categoryRepository = new CategoriesRepositoryInMemory();
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

    const category = await categoryRepository.create({
      name: "Category 1",
      symptomesAssociated: ["symptome1", "symptome2"],
    });

    const doctor = await createDoctorUseCase.execute({
      user_id: user.id,
      crm: 123456789,
      clinicAdress: "St. A, 123",
      availableAgenda: "Mon. 18:00 - 20:00",
      bio: "User's Bio",
      category_id: category.id,
    });

    expect(doctor).toHaveProperty("user_id");
  });

  it("should not be able to create a new doctor from a now existent user", () => {
    expect(async () => {
      const category = await categoryRepository.create({
        name: "Category 1",
        symptomesAssociated: ["symptome1", "symptome2"],
      });

      await createDoctorUseCase.execute({
        user_id: "fakeUserId",
        crm: 123456789,
        clinicAdress: "St. A, 123",
        bio: "User's Bio",
        availableAgenda: "Mon. 18:00 - 20:00",
        category_id: category.id,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
