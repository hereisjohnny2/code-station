import { AppError } from "../../../../shared/errors/AppError";
import { UsersRepositoryInMemory } from "../../../accounts/respositories/in-memory/UsersRepositoryInMemory";
import { IUsersRepository } from "../../../accounts/respositories/IUsersRepository";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { IDoctorsRepository } from "../../repositories/IDoctorsRepository";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoryRepositoryInMemory";
import { DoctorsRepositoryInMemory } from "../../repositories/in-memory/DoctorsRepositoryInMemory";
import { RateDoctorUseCase } from "./rateDoctorUseCase";

let usersRepository: IUsersRepository;
let doctorsRepository: IDoctorsRepository;
let categoryRepository: ICategoriesRepository;
let rateDoctorUseCase: RateDoctorUseCase;

describe("Rate Doctor", () => {
  beforeEach(() => {
    usersRepository = new UsersRepositoryInMemory();
    doctorsRepository = new DoctorsRepositoryInMemory();
    categoryRepository = new CategoriesRepositoryInMemory();
    rateDoctorUseCase = new RateDoctorUseCase(doctorsRepository);
  });

  it("should be able to rate a doctor", async () => {
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

    const doctor = await doctorsRepository.create({
      user_id: user.id,
      crm: 123456789,
      clinicAdress: "St. A, 123",
      bio: "User's Bio",
      availableAgenda: "Mon. 18:00 - 20:00",
      category_id: category.id,
      uf: "RJ",
    });

    await rateDoctorUseCase.execute({
      doctor_id: doctor.user_id,
      rate: 5,
    });

    expect(doctor.ratingCount).toBe(1);
    expect(doctor.rating).toBe(5);
  });

  it("should not be able to rate a non existent doctor", async () => {
    await expect(
      rateDoctorUseCase.execute({
        doctor_id: "fakeDoctorId",
        rate: 5,
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
