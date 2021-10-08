import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";

const upload = multer({
  dest: "./tmp",
});

const usersRoutes = Router();

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();
usersRoutes.post("/", createUserController.handle);

usersRoutes.patch(
  "/import",
  upload.single("file"),
  updateUserAvatarController.handle
);

export { usersRoutes };
