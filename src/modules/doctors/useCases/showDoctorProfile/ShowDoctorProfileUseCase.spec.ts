import { AppError } from "../../../../shared/errors/AppError";
import { UsersRepositoryInMemory } from "../../../accounts/respositories/in-memory/UsersRepositoryInMemory";
import { IUsersRepository } from "../../../accounts/respositories/IUsersRepository";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { IDoctorsRepository } from "../../repositories/IDoctorsRepository";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoryRepositoryInMemory";
import { DoctorsRepositoryInMemory } from "../../repositories/in-memory/DoctorsRepositoryInMemory";
import { ShowDoctorProfileUseCase } from "./ShowDoctorProfileUseCase";

let doctorsRepository: IDoctorsRepository;
let usersRepository: IUsersRepository;
let categoryRepository: ICategoriesRepository;
let showDoctorProfileUseCase: ShowDoctorProfileUseCase;

describe("Show Doctor Profile", () => {
  beforeEach(() => {
    doctorsRepository = new DoctorsRepositoryInMemory();
    usersRepository = new UsersRepositoryInMemory();
    categoryRepository = new CategoriesRepositoryInMemory();
    showDoctorProfileUseCase = new ShowDoctorProfileUseCase(doctorsRepository);
  });

  it("should be able to show a doctor profile", async () => {
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
    });

    const foundDoctor = await showDoctorProfileUseCase.execute(doctor.user_id);

    expect(foundDoctor).toMatchObject(doctor);
  });

  it("should not be able to show a profile of a non-existent user!", () => {
    expect(async () => {
      await showDoctorProfileUseCase.execute("fakeDoctorId");
    }).rejects.toBeInstanceOf(AppError);
  });
});
