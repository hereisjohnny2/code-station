import { Router } from "express";

import { CreateDoctorController } from "../../../../modules/doctors/useCases/createDoctorUseCase/CreateDoctorController";
import { ListDoctorsController } from "../../../../modules/doctors/useCases/listDoctorsUseCase/ListDoctorsController";
import { RateDoctorController } from "../../../../modules/doctors/useCases/rateDoctorUseCase/RateDoctorController";
import { ShowDoctorProfileController } from "../../../../modules/doctors/useCases/showDoctorProfile/ShowDoctorProfileController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { verifyCRM } from "../middlewares/verifyCRM";

const doctorsRoutes = Router();

const createDcotorController = new CreateDoctorController();
const showDoctorProfileController = new ShowDoctorProfileController();
const listDoctorsController = new ListDoctorsController();
const rateDoctorController = new RateDoctorController();

doctorsRoutes.post(
  "/",
  ensureAuthenticated,
  verifyCRM,
  createDcotorController.handle
);
doctorsRoutes.get("/:user_id", showDoctorProfileController.handle);
doctorsRoutes.get("/", listDoctorsController.handle);
doctorsRoutes.patch("/rate/:doctor_id", rateDoctorController.handle);

export { doctorsRoutes };
