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
    user,
    category,
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
      user,
      category,
    });

    await this.repository.save(doctor);

    return doctor;
  }

  async list(category_id?: string): Promise<Doctor[]> {
    const doctors = category_id
      ? await this.repository.find({
          where: { category_id },
          relations: ["category", "user"],
        })
      : await this.repository.find({ relations: ["category", "user"] });
    return doctors;
  }

  async findByUser(user_id: string): Promise<Doctor> {
    const doctor = await this.repository.findOne(
      { user_id },
      {
        relations: ["category", "user"],
      }
    );
    return doctor;
  }

  async findById(id: string): Promise<Doctor> {
    const doctor = await this.repository.findOne(id, {
      relations: ["category", "users"],
    });
    return doctor;
  }
}

export { DoctorsRepositories };
