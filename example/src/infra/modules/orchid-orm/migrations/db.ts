import { orchidORM } from 'orchid-orm'
import { Tables } from '../tables'
import { config } from './config'

export const db = orchidORM({ databaseURL: config.url }, Tables)
