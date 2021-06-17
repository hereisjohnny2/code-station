import { Router } from "express";

import { authenticateRoutes } from "./authentication.routes";
import { doctorsRoutes } from "./doctors.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use(authenticateRoutes);
router.use("/users", usersRoutes);
router.use("/doctors", doctorsRoutes);

export { router };
