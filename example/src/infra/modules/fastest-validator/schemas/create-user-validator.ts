import { ICreateUserCommand } from '@app'
import { ValidationSchema } from 'fastest-validator'

export const CreateUserSchema: ValidationSchema<ICreateUserCommand> = {
  name: { type: 'string', max: 64 },
  birthdate: { type: 'date', convert: true },
}
