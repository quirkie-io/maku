import { randomUUID } from 'crypto'
import { AggregateRoot } from '@quirkie-io/quirkie'

export class User extends AggregateRoot<string> {
  name: string
  birthdate: Date

  static create(name: string, birthdate: Date): User {
    const user = new User()

    user.id = randomUUID()
    user.name = name
    user.birthdate = birthdate
    user.addEvent('user.created')

    return user
  }

  update(name: string): void {
    this.name = name
  }
}
