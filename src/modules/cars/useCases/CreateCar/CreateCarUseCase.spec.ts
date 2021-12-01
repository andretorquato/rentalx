import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
describe("Create Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });
  it("Should be able create a new car", async () => {
    const car = await createCarUseCase.execute({
      name: "Fusca",
      description: "Carro popular brasileiro",
      brand: "Volkswagen",
      category_id: "30123",
      daily_rate: 30,
      fine_amount: 50,
      license_plate: "32DAS2",
    });
    expect(car).toHaveProperty("id");
  });
  it("Should not be able to create a car with exists license plate", () => {
    expect(async () => {
      await carsRepositoryInMemory.create({
        name: "Fusca 1",
        description: "Carro popular brasileiro",
        brand: "Volkswagen",
        category_id: "30123",
        daily_rate: 30,
        fine_amount: 50,
        license_plate: "32DAS2",
      });
      await carsRepositoryInMemory.create({
        name: "Fusca 2",
        description: "Carro popular brasileiro",
        brand: "Volkswagen",
        category_id: "30123",
        daily_rate: 30,
        fine_amount: 50,
        license_plate: "32DAS2",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
  it("Should be able to create a car with available true", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Fusca 2",
      description: "Carro popular brasileiro",
      brand: "Volkswagen",
      category_id: "30123",
      daily_rate: 30,
      fine_amount: 50,
      license_plate: "32DAS2",
    });
    expect(car.available).toBe(true);
  });
});
