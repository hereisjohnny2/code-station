import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSymptomUseCase } from "./CreateSymptomUseCase";

class CreateSymptomController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createSymptomUseCase = container.resolve(CreateSymptomUseCase);

    const symptom = await createSymptomUseCase.execute(name);

    return response.status(201).json(symptom);
  }
}

export { CreateSymptomController };
