import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { Category } from "../../infra/typeorm/entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { ISymptomRepository } from "../../repositories/ISymptomRepository";

interface IRequest {
  category_id: string;
  symptomes_id: string[];
}

@injectable()
class CreateCategorySymptomesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: ICategoriesRepository,
    @inject("SymptomesRepository")
    private symptomesRepositories: ISymptomRepository
  ) {}

  async execute({ category_id, symptomes_id }: IRequest): Promise<Category> {
    const category = await this.categoryRepository.findById(category_id);

    if (!category) {
      throw new AppError("Category does not exists!");
    }

    const symptomes = await this.symptomesRepositories.findByIds(symptomes_id);

    category.symptomes = symptomes;

    await this.categoryRepository.create(category);

    return category;
  }
}

export { CreateCategorySymptomesUseCase };
