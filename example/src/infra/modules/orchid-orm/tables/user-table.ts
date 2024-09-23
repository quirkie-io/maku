import { BaseTable } from '@quirkie-io/orchid-orm'

export class UserTable extends BaseTable {
  readonly table = 'User'
  columns = this.setColumns((t) => ({
    id: t.varchar(36).primaryKey(),
    name: t.varchar(64),
    birthdate: t.date(),
    rowNum: t.serial(),
  }))
}
