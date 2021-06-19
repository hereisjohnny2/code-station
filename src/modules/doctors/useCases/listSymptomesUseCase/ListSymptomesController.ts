import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListSymptomesUseCase } from "./ListSymptomesUseCase";

class ListSymptomesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listSymptomesUseCase = container.resolve(ListSymptomesUseCase);

    const symptomes = await listSymptomesUseCase.execute();

    return response.json(symptomes);
  }
}

export { ListSymptomesController };
