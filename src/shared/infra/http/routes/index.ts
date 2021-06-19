import { Router } from "express";

import { authenticateRoutes } from "./authentication.routes";
import { categoriesRoutes } from "./categories.routes";
import { doctorsRoutes } from "./doctors.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use(authenticateRoutes);
router.use("/users", usersRoutes);
router.use("/doctors", doctorsRoutes);
router.use("/categories", categoriesRoutes);

export { router };
