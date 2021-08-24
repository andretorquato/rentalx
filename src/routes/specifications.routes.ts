import { Router } from "express";

import { createSpecificationsController } from "../modules/cars/useCases/createSpecifications";

const specificationsRouter = Router();

specificationsRouter.post("/", (request, response) => {
  return createSpecificationsController.handle(request, response);
});

export { specificationsRouter };
