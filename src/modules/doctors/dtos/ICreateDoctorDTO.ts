import { Category } from "../infra/typeorm/entities/Category";

interface ICreateDoctorDTO {
  user_id: string;
  crm: number;
  clinicAdress: string;
  availableAgenda: string;
  bio: string;
  category: Category;
}

export { ICreateDoctorDTO };
