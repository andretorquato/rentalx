import { Router } from "express";

import { CreateSpecificationsController } from "@modules/cars/useCases/createSpecifications/CreateSpecificationsController";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

const specificationsRouter = Router();

const createSpecificationsController = new CreateSpecificationsController();
specificationsRouter.use(ensureAuthenticated);
specificationsRouter.post("/", createSpecificationsController.handle);

export { specificationsRouter };
