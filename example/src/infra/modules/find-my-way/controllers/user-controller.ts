import { ICreateUserCommand } from '@app'
import { COMMANDS, TYPES } from '@crosscutting'
import { User } from '@domain/user/entities'
import { Route } from '@quirkie-io/find-my-way'
import { IMediator } from '@quirkie-io/quirkie'
import { inject, injectable } from 'inversify'

@injectable()
export class UserController {
  private mediator: IMediator

  constructor(@inject(TYPES.mediator) mediator: IMediator) {
    this.mediator = mediator
  }

  @Route({ method: 'POST', path: '/users' })
  async create(req: ICreateUserCommand): Promise<User> {
    return await this.mediator.send(COMMANDS.createUser, req)
  }
}
