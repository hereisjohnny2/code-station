import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListDoctorsUseCase } from "./ListDoctorsUseCase";

class ListDoctorsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { category_id } = request.query;

    const listDoctorsUseCase = container.resolve(ListDoctorsUseCase);

    const doctors = await listDoctorsUseCase.execute(category_id as string);

    return response.json(doctors);
  }
}

export { ListDoctorsController };
