import { ICreateCategoryDTO } from "../../dtos/ICreateCategoryDTO";
import { Category } from "../../infra/typeorm/entities/Category";
import { ICategoriesRepository } from "../ICategoriesRepository";

class CategoriesRepositoryInMemory implements ICategoriesRepository {
  categories: Category[];
  constructor() {
    this.categories = [];
  }
  async create({
    name,
    symptomesAssociated,
  }: ICreateCategoryDTO): Promise<Category> {
    const category = new Category();

    Object.assign(category, {
      name,
      symptomesAssociated,
    });

    this.categories.push(category);

    return category;
  }

  async list(): Promise<Category[]> {
    return this.categories;
  }
}

export { CategoriesRepositoryInMemory };
