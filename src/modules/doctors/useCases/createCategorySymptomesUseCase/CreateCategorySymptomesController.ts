import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCategorySymptomesUseCase } from "./CreateCategorySymptomesUseCase";

class CreateCategorySymptomesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { category_id } = request.params;
    const { symptomes_id } = request.body;

    const createCategorySymptomesUseCase = container.resolve(
      CreateCategorySymptomesUseCase
    );

    const category = await createCategorySymptomesUseCase.execute({
      category_id,
      symptomes_id,
    });

    return response.status(201).json(category);
  }
}

export { CreateCategorySymptomesController };
