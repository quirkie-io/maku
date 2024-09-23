import { COMMANDS, TYPES } from '@crosscutting'
import { User } from '@domain/user/entities'
import { IUserRepo } from '@domain/user/repos'
import { IRequestHandler, In, RequestHandler } from '@quirkie-io/quirkie'
import { inject, injectable } from 'inversify'

export interface IUpdateUserCommand {
  id: string
  name: string
  birthdate: Date
}

@injectable()
@RequestHandler(COMMANDS.updateUser)
export class UpdateUserCommandHandler implements IRequestHandler<IUpdateUserCommand, User> {
  private readonly repo: IUserRepo

  constructor(@inject(TYPES.userRepo) repo: IUserRepo) {
    this.repo = repo
  }

  async handle(req: IUpdateUserCommand): Promise<User> {
    const user = await this.repo.findById(req.id)
    user.update('Carlos')
    await this.repo.update(user)
    return user
  }
}
