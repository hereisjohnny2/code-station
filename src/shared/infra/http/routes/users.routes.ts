import { Router } from "express";
import multer from "multer";

import uploadConfig from "../../../../config/upload";
import { CreateUserController } from "../../../../modules/accounts/useCases/createUserUseCase/CreateUser.Controller";
import { UpdateUserAvatarController } from "../../../../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const updateUserAvatarConttoller = new UpdateUserAvatarController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUserAvatarConttoller.handle
);

export { usersRoutes };