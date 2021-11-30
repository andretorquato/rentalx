import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
describe("Create Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });
  it("Should be able create a new car", async () => {
    createCarUseCase.execute({
      name: "Fusca",
      description: "Carro popular brasileiro",
      brand: "Volkswagen",
      category_id: "30123",
      daily_rate: 30,
      fine_amount: 50,
      license_plate: "32DAS2",
    });
  });
});
