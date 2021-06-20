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
}

export { ICreateDoctorDTO };
