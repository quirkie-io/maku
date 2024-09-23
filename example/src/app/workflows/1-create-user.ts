import { COMMANDS, TYPES } from '@crosscutting'
import { User } from '@domain/user/entities'
import { IUserRepo } from '@domain/user/repos'
import { FlowStep, HandlerContext, IMediator, RequestHandler } from '@quirkie-io/quirkie'
import { inject, injectable } from 'inversify'

export interface ICreateUserCommand {
  name: string
  birthdate: Date
}

const lock = (data: ICreateUserCommand) => ({
  key: `${COMMANDS.createUser.description}-${data.name}`,
  timeout: 5000,
})

@injectable()
@RequestHandler(COMMANDS.createUser)
export class CreateUserCommandHandler extends FlowStep<ICreateUserCommand, User> {
  private readonly repo: IUserRepo

  constructor(@inject(TYPES.userRepo) repo: IUserRepo, @inject(TYPES.mediator) mediator: IMediator) {
    super(mediator)

    this.repo = repo
  }

  async next(req: ICreateUserCommand, context: HandlerContext, finish: (res?: User) => void): Promise<void> {
    context.state?.set('key', 'value1')
    const user = User.create(req.name, req.birthdate)
    await this.repo.insert(user)
    finish(user)
  }
}
