import { User } from '@domain/user/entities'
import { MappingSchema } from '@quirkie-io/quirkie'

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const UserProfile: MappingSchema<User, any> = {
  target: User,
  mappings: {
    id: { name: 'id', type: 'string' },
    name: { name: 'name', type: 'string' },
    birthdate: { name: 'birthdate', type: 'date' },
    rowNum: { name: 'rowNum', type: 'number' },
  },
}
