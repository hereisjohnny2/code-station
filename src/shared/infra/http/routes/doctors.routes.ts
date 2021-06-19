import { Router } from "express";

import { CreateDoctorController } from "../../../../modules/doctors/useCases/createDoctorUseCase/CreateDoctorController";
import { ShowDoctorProfileController } from "../../../../modules/doctors/useCases/showDoctorProfile/ShowDoctorProfileController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { verifyCRM } from "../middlewares/verifyCRM";

const doctorsRoutes = Router();

const createDcotorController = new CreateDoctorController();
const showDoctorProfileController = new ShowDoctorProfileController();

doctorsRoutes.post(
  "/",
  ensureAuthenticated,
  verifyCRM,
  createDcotorController.handle
);
doctorsRoutes.get("/:user_id", showDoctorProfileController.handle);

export { doctorsRoutes };
