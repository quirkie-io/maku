import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

export const config = {
  url: process.env.ORCHID_ORM_URL,
}
