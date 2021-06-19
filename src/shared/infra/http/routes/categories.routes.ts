import { Router } from "express";

import { CreateCategoryController } from "../../../../modules/doctors/useCases/createCategoryUseCase/CreateCategoryController";
import { ListCategoriesController } from "../../../../modules/doctors/useCases/listCategoriesUseCase/ListCategoriesController";

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post("/", createCategoryController.handle);
categoriesRoutes.get("/", listCategoriesController.handle);

export { categoriesRoutes };
