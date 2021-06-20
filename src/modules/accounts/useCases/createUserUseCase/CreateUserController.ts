import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, telefone } = request.body;
    const createUserUseCase = container.resolve(CreateUserUseCase);
    await createUserUseCase.execute({
      name,
      password,
      email,
      telefone,
    });

    return response.status(201).send();
  }
}

export { CreateUserController };
