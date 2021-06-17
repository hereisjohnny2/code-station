import { getRepository, Repository } from "typeorm";

import { ICreateCategoryDTO } from "../../../dtos/ICreateCategoryDTO";
import { ICategoriesRepository } from "../../../repositories/ICategoriesRepository";
import { Category } from "../entities/Category";

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;
  constructor() {
    this.repository = getRepository(Category);
  }

  async create({
    name,
    symptomesAssociated,
  }: ICreateCategoryDTO): Promise<Category> {
    const category = this.repository.create({
      name,
      symptomesAssociated,
    });

    await this.repository.save(category);

    return category;
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }
}

export { CategoriesRepository };
