import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate user", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory
    );
  });
  it("should be able authenticate an user", async () => {
    const user = {
      driver_license: "123456789",
      email: "teste@teste.com",
      name: "Teste André",
      password: "123456",
    };
    await createUserUseCase.execute(user);

    const response = await authenticateUserUseCase.execute({
      email: "teste@teste.com",
      password: "123456",
    });

    expect(response).toHaveProperty("token");
  });

  it("should not be able to authenticate an nonexistent user", () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: "fake@mail.com",
        password: "123456",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to authenticate with incorrect password", async () => {
    const user = {
      driver_license: "123456789",
      email: "teste@teste.com",
      name: "Teste André",
      password: "123456",
    };
    await createUserUseCase.execute(user);

    expect(async () => {
      await authenticateUserUseCase.execute({
        email: "teste@teste.com",
        password: "error",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
