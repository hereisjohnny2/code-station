import { ICreateDoctorDTO } from "../../dtos/ICreateDoctorDTO";
import { Doctor } from "../../infra/typeorm/entities/Doctor";
import { IDoctorsRepository } from "../IDoctorsRepository";

class DoctorsRepositoryInMemory implements IDoctorsRepository {
  private doctors: Doctor[];
  constructor() {
    this.doctors = [];
  }

  async findById(doctor_id: string): Promise<Doctor> {
    const doctor = this.doctors.find((doctor) => doctor.user_id === doctor_id);
    return doctor;
  }

  async create({
    user_id,
    crm,
    clinicAdress,
    availableAgenda,
    bio,
    category,
  }: ICreateDoctorDTO): Promise<Doctor> {
    const doctor = new Doctor();
    Object.assign(doctor, {
      user_id,
      crm,
      clinicAdress,
      availableAgenda,
      bio,
      category,
    });
    this.doctors.push(doctor);

    return doctor;
  }

  async list(): Promise<Doctor[]> {
    return this.doctors;
  }
}

export { DoctorsRepositoryInMemory };
