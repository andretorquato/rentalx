import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { CreateSpecificationsController } from "../modules/cars/useCases/createSpecifications/CreateSpecificationsController";

const specificationsRouter = Router();

const createSpecificationsController = new CreateSpecificationsController();
specificationsRouter.use(ensureAuthenticated);
specificationsRouter.post("/", createSpecificationsController.handle);

export { specificationsRouter };
