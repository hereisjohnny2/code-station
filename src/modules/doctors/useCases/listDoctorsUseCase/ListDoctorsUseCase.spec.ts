import { UsersRepositoryInMemory } from "../../../accounts/respositories/in-memory/UsersRepositoryInMemory";
import { IUsersRepository } from "../../../accounts/respositories/IUsersRepository";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { IDoctorsRepository } from "../../repositories/IDoctorsRepository";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoryRepositoryInMemory";
import { DoctorsRepositoryInMemory } from "../../repositories/in-memory/DoctorsRepositoryInMemory";
import { ListDoctorsUseCase } from "./ListDoctorsUseCase";

let usersRepository: IUsersRepository;
let doctorsRepository: IDoctorsRepository;
let categoryRepository: ICategoriesRepository;
let listDoctorsUseCase: ListDoctorsUseCase;

describe("List Doctors", () => {
  beforeEach(() => {
    usersRepository = new UsersRepositoryInMemory();
    doctorsRepository = new DoctorsRepositoryInMemory();
    categoryRepository = new CategoriesRepositoryInMemory();
    listDoctorsUseCase = new ListDoctorsUseCase(doctorsRepository);
  });

  it("should be able to list all doctors", async () => {
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

    const doctors = await listDoctorsUseCase.execute();

    expect(doctors.length).toBe(1);
    expect(doctors[0]).toMatchObject(doctor);
  });
});
