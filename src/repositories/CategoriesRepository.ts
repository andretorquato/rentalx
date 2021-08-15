import { Category } from "../model/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository {
  categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ description, name }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      description,
      name,
      create_at: new Date(),
    });
    this.categories.push(category);
  }
}

export { CategoriesRepository };
