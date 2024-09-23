import { COMMANDS } from '@crosscutting'
import { ValidatorModule } from '@quirkie-io/fastest-validator'
import { CreateUserSchema } from './schemas'

export class FastestValidatorModule extends ValidatorModule {
  configure(): void {
    this.addValidator(COMMANDS.createUser, CreateUserSchema)
  }
}
