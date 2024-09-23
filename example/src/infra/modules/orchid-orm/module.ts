import { TYPES } from '@crosscutting'
import { IUserRepo } from '@domain/user/repos'
import { DatabaseModule as Base } from '@quirkie-io/orchid-orm'
import { TableClasses } from 'orchid-orm'
import { UserRepo } from './repos'
import { Tables } from './tables'

export class DatabaseModule extends Base {
  configureRepos(): void {
    this.container.addTransient<IUserRepo>(TYPES.userRepo, UserRepo)
  }

  getTables(): TableClasses {
    return Tables
  }
}
