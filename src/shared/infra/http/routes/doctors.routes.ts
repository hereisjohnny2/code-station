import { Router } from "express";

import { CreateDoctorController } from "../../../../modules/doctors/useCases/createDoctorUseCase/CreateDoctorController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const doctorsRoutes = Router();

const createDcotorController = new CreateDoctorController();

doctorsRoutes.post("/", ensureAuthenticated, createDcotorController.handle);

export { doctorsRoutes };
