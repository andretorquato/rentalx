import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  avatar_url: string;
  user_id: string;
}
@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ avatar_url, user_id }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(user_id);
    user.avatar = avatar_url;

    await this.usersRepository.create(user);
  }
}

export { UpdateUserAvatarUseCase };
