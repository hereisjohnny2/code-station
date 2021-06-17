import { v4 as uuidV4 } from "uuid";

class Category {
  id: string;
  name: string;
  symptomesAssociated: string[];

  constructor() {
    if (!this.id) this.id = uuidV4();
    if (!this.symptomesAssociated) this.symptomesAssociated = [];
  }
}

export { Category };
