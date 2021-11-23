import { Specification } from "../infra/typeorm/entities/Specification";

interface ISpecificationsDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ description, name }: ISpecificationsDTO): Promise<void>;
  findByName(name: string): Promise<Specification>;
}
export { ISpecificationsRepository, ISpecificationsDTO };
