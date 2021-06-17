import { ICreateDoctorDTO } from "../../dtos/CreateDoctorDTO";
import { Doctor } from "../../infra/typeorm/entities/Doctor";
import { IDoctorsRepository } from "../IDoctorsRepository";

class DoctorsRepositoryInMemory implements IDoctorsRepository {
  private doctors: Doctor[];
  constructor() {
    this.doctors = [];
  }
  async create({
    user_id,
    crm,
    clinicAdress,
    availableAgenda,
  }: ICreateDoctorDTO): Promise<Doctor> {
    const doctor = new Doctor();
    Object.assign(doctor, {
      user_id,
      crm,
      clinicAdress,
      availableAgenda,
    });
    this.doctors.push(doctor);

    return doctor;
  }
}

export { DoctorsRepositoryInMemory };
