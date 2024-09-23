import { change } from '../script'

change(async (db) => {
  await db.createTable('User', (t) => ({
    id: t.varchar(36).primaryKey(),
    name: t.varchar(64),
    birthdate: t.date(),
    rowNum: t.serial(),
  }))
})
