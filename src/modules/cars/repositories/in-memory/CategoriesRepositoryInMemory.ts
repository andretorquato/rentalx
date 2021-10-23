import { Category } from "../../entities/Category";
import {
  ICategoryRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

export class CategoriesRepositoryInMemory implements ICategoryRepository {
  findByName(name: string): Promise<Category> {
    throw new Error("Method not implemented.");
  }
  list(): Promise<Category[]> {
    throw new Error("Method not implemented.");
  }
  create({ description, name }: ICreateCategoryDTO): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
