import { Request, Response } from "express";
import { container } from "tsyringe";

import { ShowDoctorProfileUseCase } from "./ShowDoctorProfileUseCase";

class ShowDoctorProfileController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { doctor_id } = request.params;

    const showDoctorProfileUseCase = container.resolve(
      ShowDoctorProfileUseCase
    );

    const doctor = await showDoctorProfileUseCase.execute(doctor_id);

    return response.json(doctor);
  }
}

export { ShowDoctorProfileController };
