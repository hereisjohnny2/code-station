import { v4 as uuidV4 } from "uuid";

class Category {
  id: string;
  name: string;
  symptomesAssociated: string[];
  created_at?: Date;
  updated_at?: Date;

  constructor() {
    if (!this.id) this.id = uuidV4();
    if (!this.symptomesAssociated) this.symptomesAssociated = [];
  }
}

export { Category };
