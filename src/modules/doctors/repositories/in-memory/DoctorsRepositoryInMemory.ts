import { ICreateDoctorDTO } from "../../dtos/ICreateDoctorDTO";
import { Doctor } from "../../infra/typeorm/entities/Doctor";
import { IDoctorsRepository } from "../IDoctorsRepository";

class DoctorsRepositoryInMemory implements IDoctorsRepository {
  private doctors: Doctor[];
  constructor() {
    this.doctors = [];
  }

  async findByUser(user_id: string): Promise<Doctor> {
    const doctor = this.doctors.find((doctor) => doctor.user_id === user_id);
    return doctor;
  }

  async create({
    user_id,
    id,
    crm,
    clinicAdress,
    availableAgenda,
    bio,
    category_id,
    rating,
    ratingCount,
  }: ICreateDoctorDTO): Promise<Doctor> {
    const doctor = new Doctor();
    Object.assign(doctor, {
      user_id,
      crm,
      clinicAdress,
      availableAgenda,
      bio,
      category_id,
      id,
      rating,
      ratingCount,
    });
    this.doctors.push(doctor);

    return doctor;
  }

  async list(): Promise<Doctor[]> {
    return this.doctors;
  }

  async findById(id: string): Promise<Doctor> {
    const doctor = this.doctors.find((doctor) => doctor.id === id);
    return doctor;
  }
}

export { DoctorsRepositoryInMemory };
