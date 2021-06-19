import { ICreateCategoryDTO } from "../dtos/ICreateCategoryDTO";
import { Category } from "../infra/typeorm/entities/Category";

interface ICategoriesRepository {
  create({ name }: ICreateCategoryDTO): Promise<Category>;
  list(): Promise<Category[]>;
}

export { ICategoriesRepository };
