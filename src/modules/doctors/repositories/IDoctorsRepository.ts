import { ICreateDoctorDTO } from "../dtos/CreateDoctorDTO";
import { Doctor } from "../infra/typeorm/entities/Doctor";

interface IDoctorsRepository {
  create(data: ICreateDoctorDTO): Promise<Doctor>;
}

export { IDoctorsRepository };
