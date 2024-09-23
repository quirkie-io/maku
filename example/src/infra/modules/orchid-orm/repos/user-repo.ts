import { TYPES } from '@crosscutting'
import { User } from '@domain/user/entities'
import { IUserRepo } from '@domain/user/repos'
import { OrchidRepo } from '@quirkie-io/orchid-orm'
import { IMapper, IMediator } from '@quirkie-io/quirkie'
import { inject, injectable } from 'inversify'
import { OrchidORM } from 'orchid-orm'

@injectable()
export class UserRepo extends OrchidRepo<User> implements IUserRepo {
  constructor(
    @inject(TYPES.database) db: OrchidORM,
    @inject(TYPES.mapper) mapper: IMapper,
    @inject(TYPES.mediator) mediator: IMediator,
  ) {
    super(User, 'user', db, mapper, mediator)
  }
}
