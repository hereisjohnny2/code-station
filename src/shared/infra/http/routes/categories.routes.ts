import { Router } from "express";

import { CreateCategorySymptomesController } from "../../../../modules/doctors/useCases/createCategorySymptomesUseCase/CreateCategorySymptomesController";
import { CreateCategoryController } from "../../../../modules/doctors/useCases/createCategoryUseCase/CreateCategoryController";
import { ListCategoriesController } from "../../../../modules/doctors/useCases/listCategoriesUseCase/ListCategoriesController";

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();
const createCategorySymptomesController =
  new CreateCategorySymptomesController();

categoriesRoutes.post("/", createCategoryController.handle);
categoriesRoutes.post(
  "/symptomes/:category_id",
  createCategorySymptomesController.handle
);
categoriesRoutes.get("/", listCategoriesController.handle);

export { categoriesRoutes };
