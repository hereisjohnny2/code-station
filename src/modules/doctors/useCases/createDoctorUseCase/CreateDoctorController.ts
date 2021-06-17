import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateDoctorUseCase } from "./CreateDoctorUseCase";

class CreateDoctorController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id, crm, clinicAdress, availableAgenda, bio, category_id } =
      request.body;
    const createDoctorUseCase = container.resolve(CreateDoctorUseCase);

    const doctor = await createDoctorUseCase.execute({
      user_id,
      crm,
      clinicAdress,
      availableAgenda,
      bio,
      category_id,
    });

    return response.status(201).json(doctor);
  }
}

export { CreateDoctorController };
