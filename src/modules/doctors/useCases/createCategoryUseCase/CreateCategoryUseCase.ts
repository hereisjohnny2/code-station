import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { Category } from "../../infra/typeorm/entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: ICategoriesRepository
  ) {}

  async execute(name: string): Promise<Category> {
    const alreadyTakenCategoryName = await this.categoryRepository.findByName(
      name
    );

    if (alreadyTakenCategoryName) {
      throw new AppError("Name Already Taken!");
    }

    const category = await this.categoryRepository.create({ name });

    return category;
  }
}

export { CreateCategoryUseCase };
