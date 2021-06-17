import { Category } from "./Category";

class Doctor {
  user_id: string;
  crm: number;
  clinicAdress: string;
  availableAgenda: string;
  rating: number;
  ratingCount: number;
  bio: string;
  category: Category;
  created_at?: Date;
  updated_at?: Date;

  constructor() {
    if (!this.rating) this.rating = 0;
    if (!this.ratingCount) this.ratingCount = 0;
  }
}

export { Doctor };
