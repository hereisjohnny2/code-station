import { UsersRepositoryInMemory } from "../../../accounts/respositories/in-memory/UsersRepositoryInMemory";
import { IUsersRepository } from "../../../accounts/respositories/IUsersRepository";
import { IDoctorsRepository } from "../../repositories/IDoctorsRepository";
import { DoctorsRepositoryInMemory } from "../../repositories/in-memory/DoctorsRepositoryInMemory";
import { ListDoctorsUseCase } from "./ListDoctorsUseCase";

let usersRepository: IUsersRepository;
let doctorsRepository: IDoctorsRepository;
let listDoctorsUseCase: ListDoctorsUseCase;

describe("List Doctors", () => {
  beforeEach(() => {
    usersRepository = new UsersRepositoryInMemory();
    doctorsRepository = new DoctorsRepositoryInMemory();
    listDoctorsUseCase = new ListDoctorsUseCase(doctorsRepository);
  });

  it("should be able to list all doctors", async () => {
    const user = await usersRepository.create({
      name: "User1",
      email: "user@mail.com",
      password: "userpass",
    });

    const doctor = await doctorsRepository.create({
      user_id: user.id,
      crm: 123456789,
      clinicAdress: "St. A, 123",
      availableAgenda: "Mon. 18:00 - 20:00",
    });

    const doctors = await listDoctorsUseCase.execute();

    expect(doctors.length).toBe(1);
    expect(doctors[0]).toMatchObject(doctor);
  });
});
