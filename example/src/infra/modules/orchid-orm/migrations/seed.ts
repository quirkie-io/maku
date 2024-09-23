import { randomUUID } from 'crypto'
import { db } from './db'

export const seed = async () => {
  await db.user.createMany([{ id: randomUUID(), name: 'Bruce Wayne', birthdate: new Date() }])
}
