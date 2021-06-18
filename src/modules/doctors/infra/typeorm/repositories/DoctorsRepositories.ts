import { getRepository, Repository } from "typeorm";

import { ICreateDoctorDTO } from "../../../dtos/ICreateDoctorDTO";
import { IDoctorsRepository } from "../../../repositories/IDoctorsRepository";
import { Doctor } from "../entities/Doctor";

class DoctorsRepositories implements IDoctorsRepository {
  private repository: Repository<Doctor>;

  constructor() {
    this.repository = getRepository(Doctor);
  }

  async create({
    user_id,
    crm,
    clinicAdress,
    availableAgenda,
    bio,
    category_id,
  }: ICreateDoctorDTO): Promise<Doctor> {
    const doctor = this.repository.create({
      user_id,
      crm,
      clinicAdress,
      availableAgenda,
      bio,
      category_id,
    });

    await this.repository.save(doctor);

    return doctor;
  }

  async list(): Promise<Doctor[]> {
    const doctors = await this.repository.find();
    return doctors;
  }

  async findByUser(user_id: string): Promise<Doctor> {
    const doctor = await this.repository.findOne({ user_id });
    return doctor;
  }
}

export { DoctorsRepositories };
