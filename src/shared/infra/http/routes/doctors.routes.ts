import { Router } from "express";

import { CreateDoctorController } from "../../../../modules/doctors/useCases/createDoctorUseCase/CreateDoctorController";
import { ListDoctorsController } from "../../../../modules/doctors/useCases/listDoctorsUseCase/ListDoctorsController";
import { ShowDoctorProfileController } from "../../../../modules/doctors/useCases/showDoctorProfile/ShowDoctorProfileController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { verifyCRM } from "../middlewares/verifyCRM";

const doctorsRoutes = Router();

const createDcotorController = new CreateDoctorController();
const showDoctorProfileController = new ShowDoctorProfileController();
const listDoctorsController = new ListDoctorsController();

doctorsRoutes.post(
  "/",
  ensureAuthenticated,
  verifyCRM,
  createDcotorController.handle
);
doctorsRoutes.get("/:doctor_id", showDoctorProfileController.handle);
doctorsRoutes.get("/", listDoctorsController.handle);

export { doctorsRoutes };
