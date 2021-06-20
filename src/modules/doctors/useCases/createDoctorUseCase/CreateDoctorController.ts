import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateDoctorUseCase } from "./CreateDoctorUseCase";

class CreateDoctorController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    console.log(id);

    const { crm, clinicAdress, availableAgenda, bio, category_id, uf } =
      request.body;
    const createDoctorUseCase = container.resolve(CreateDoctorUseCase);

    const doctor = await createDoctorUseCase.execute({
      user_id: id,
      crm,
      clinicAdress,
      availableAgenda,
      bio,
      category_id,
      uf,
    });

    return response.status(201).json(doctor);
  }
}

export { CreateDoctorController };
