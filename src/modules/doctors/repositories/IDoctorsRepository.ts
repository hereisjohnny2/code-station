import { ICreateDoctorDTO } from "../dtos/ICreateDoctorDTO";
import { Doctor } from "../infra/typeorm/entities/Doctor";

interface IDoctorsRepository {
  create(data: ICreateDoctorDTO): Promise<Doctor>;
  list(category_id?: string): Promise<Doctor[]>;
  findByUser(user_id: string): Promise<Doctor>;
  findById(id: string): Promise<Doctor>;
}

export { IDoctorsRepository };
