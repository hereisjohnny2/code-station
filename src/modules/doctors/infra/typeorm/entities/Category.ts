import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Symptom } from "./Symptom";

@Entity("categories")
class Category {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => Symptom)
  @JoinTable({
    name: "symptomes_categories",
    joinColumns: [{ name: "category_id" }],
    inverseJoinColumns: [{ name: "symptom_id" }],
  })
  symptomes: Symptom[];

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;

  constructor() {
    if (!this.id) this.id = uuidV4();
  }
}

export { Category };
