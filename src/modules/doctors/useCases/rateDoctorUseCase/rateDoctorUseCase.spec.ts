import { AppError } from "../../../../shared/errors/AppError";
import { UsersRepositoryInMemory } from "../../../accounts/respositories/in-memory/UsersRepositoryInMemory";
import { IUsersRepository } from "../../../accounts/respositories/IUsersRepository";
import { IDoctorsRepository } from "../../repositories/IDoctorsRepository";
import { DoctorsRepositoryInMemory } from "../../repositories/in-memory/DoctorsRepositoryInMemory";
import { RateDoctorUseCase } from "./rateDoctorUseCase";

let usersRepository: IUsersRepository;
let doctorsRepository: IDoctorsRepository;
let rateDoctorUseCase: RateDoctorUseCase;

describe("Rate Doctor", () => {
  beforeEach(() => {
    usersRepository = new UsersRepositoryInMemory();
    doctorsRepository = new DoctorsRepositoryInMemory();
    rateDoctorUseCase = new RateDoctorUseCase(doctorsRepository);
  });

  it("should be able to rate a doctor", async () => {
    const user = await usersRepository.create({
      name: "User1",
      email: "user@mail.com",
      password: "userpass",
      telefone: "22222222",
    });

    const doctor = await doctorsRepository.create({
      user_id: user.id,
      crm: 123456789,
      clinicAdress: "St. A, 123",
      bio: "User's Bio",
      availableAgenda: "Mon. 18:00 - 20:00",
    });

    await rateDoctorUseCase.execute({
      doctor_id: doctor.user_id,
      rate: 5,
    });

    expect(doctor.ratingCount).toBe(1);
    expect(doctor.rating).toBe(5);
  });

  it("should not be able to rate a non existent doctor", () => {
    expect(async () => {
      await rateDoctorUseCase.execute({
        doctor_id: "fakeDoctorId",
        rate: 5,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
