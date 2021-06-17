import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToOne,
  OneToOne,
  UpdateDateColumn,
} from "typeorm";

import { User } from "../../../../accounts/infra/typeorm/entities/User";
import { Category } from "./Category";

@Entity("doctors")
class Doctor {
  @OneToOne(() => User)
  @JoinTable({ name: "user_id" })
  user_id: string;

  @Column()
  crm: number;

  @Column()
  clinicAdress: string;

  @Column()
  availableAgenda: string;

  @Column()
  rating: number;

  @Column()
  ratingCount: number;

  @Column()
  bio: string;

  @ManyToOne(() => Category)
  @JoinTable({ name: "category_id" })
  category: Category;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;

  constructor() {
    if (!this.rating) this.rating = 0;
    if (!this.ratingCount) this.ratingCount = 0;
  }
}

export { Doctor };
