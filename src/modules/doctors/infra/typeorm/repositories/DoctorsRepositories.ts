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
    id,
    user_id,
    crm,
    clinicAdress,
    availableAgenda,
    bio,
    category_id,
    uf,
    rating,
    ratingCount,
  }: ICreateDoctorDTO): Promise<Doctor> {
    const doctor = this.repository.create({
      id,
      user_id,
      crm,
      clinicAdress,
      availableAgenda,
      bio,
      category_id,
      uf,
      rating,
      ratingCount,
    });

    await this.repository.save(doctor);

    return doctor;
  }

  async list(category_id?: string): Promise<Doctor[]> {
    const doctorsQuery = this.repository.createQueryBuilder("doctors");

    if (category_id) {
      doctorsQuery.where("doctors.category_id = :category_id", { category_id });
    }

    const doctors = await doctorsQuery.getMany();
    return doctors;
  }

  async findByUser(user_id: string): Promise<Doctor> {
    const doctor = await this.repository.findOne({ user_id });
    return doctor;
  }

  async findById(id: string): Promise<Doctor> {
    const doctor = await this.repository.findOne(id);
    return doctor;
  }
}

export { DoctorsRepositories };
