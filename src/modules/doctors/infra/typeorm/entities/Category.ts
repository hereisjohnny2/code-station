import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("categories")
class Category {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column("simple-array")
  symptomesAssociated: string[];

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;

  constructor() {
    if (!this.id) this.id = uuidV4();
    if (!this.symptomesAssociated) this.symptomesAssociated = [];
  }
}

export { Category };
