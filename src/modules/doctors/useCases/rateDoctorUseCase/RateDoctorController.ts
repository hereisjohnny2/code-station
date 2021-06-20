import { Request, Response } from "express";
import { container } from "tsyringe";

import { RateDoctorUseCase } from "./rateDoctorUseCase";

class RateDoctorController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { doctor_id } = request.params;
    const { rate } = request.body;

    const rateDoctorUseCase = container.resolve(RateDoctorUseCase);

    await rateDoctorUseCase.execute({ doctor_id, rate });

    return response.json();
  }
}

export { RateDoctorController };
