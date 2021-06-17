class Doctor {
  user_id: string;
  CRM: number;
  clinicAdress: string;
  availableAgenda: string;
  rating: number;
  created_at?: Date;
  updated_at?: Date;

  constructor() {
    if (!this.rating) this.rating = 0;
  }
}

export { Doctor };
