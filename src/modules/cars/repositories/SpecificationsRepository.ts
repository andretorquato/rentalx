import { Specification } from "../model/Specification";
import {
  ISpecificationsDTO,
  ISpecificationsRepository,
} from "./ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];
  constructor() {
    this.specifications = [];
  }

  create({ description, name }: ISpecificationsDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      description,
      name,
    });

    this.specifications.push(specification);
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );
    return specification;
  }
}

export { SpecificationsRepository };
