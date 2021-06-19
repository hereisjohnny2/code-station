import { Router } from "express";

import { CreateSymptomController } from "../../../../modules/doctors/useCases/createSymptomUseCase/CreateSymptomController";
import { ListSymptomesController } from "../../../../modules/doctors/useCases/listSymptomesUseCase/ListSymptomesController";

const symptomesRoutes = Router();

const listSymptomesController = new ListSymptomesController();
const createSymptomesController = new CreateSymptomController();

symptomesRoutes.get("/", listSymptomesController.handle);
symptomesRoutes.post("/", createSymptomesController.handle);

export { symptomesRoutes };
