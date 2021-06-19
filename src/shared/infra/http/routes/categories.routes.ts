import { Router } from "express";

import { CreateCategoryController } from "../../../../modules/doctors/useCases/createCategoryUseCase/CreateCategoryController";

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post("/", createCategoryController.handle);

export { categoriesRoutes };
