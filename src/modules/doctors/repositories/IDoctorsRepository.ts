import { ICreateDoctorDTO } from "../dtos/CreateDoctorDTO";
import { Doctor } from "../infra/typeorm/entities/Doctor";

interface IDoctorsRepository {
  create(data: ICreateDoctorDTO): Promise<Doctor>;
  list(): Promise<Doctor[]>;
  findById(doctor_id: string): Promise<Doctor>;
}

export { IDoctorsRepository };
