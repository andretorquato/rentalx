import { Router } from "express";

import { CreateSpecificationsController } from "../modules/cars/useCases/createSpecifications/CreateSpecificationsController";

const specificationsRouter = Router();

const createSpecificationsController = new CreateSpecificationsController();
specificationsRouter.post("/", createSpecificationsController.handle);

export { specificationsRouter };
