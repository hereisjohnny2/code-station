import { Router } from "express";

import { authenticateRoutes } from "./authentication.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use(authenticateRoutes);
router.use("/users", usersRoutes);

export { router };
