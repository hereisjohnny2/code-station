import { User } from "../../accounts/infra/typeorm/entities/User";
import { Category } from "../infra/typeorm/entities/Category";

interface ICreateDoctorDTO {
  id?: string;
  user_id: string;
  crm: number;
  clinicAdress: string;
  availableAgenda: string;
  bio: string;
  uf: string;
  category_id: string;
  rating?: number;
  ratingCount?: number;
  user?: User;
  category?: Category;
}

export { ICreateDoctorDTO };
