import { config } from 'dotenv'
import { MissingEnvError } from '../errors'

config({ path: '.env' })

export const DISCORD_AUTH_TOKEN = process.env.DISCORD_AUTH_TOKEN

if (DISCORD_AUTH_TOKEN === undefined) {
  throw new MissingEnvError('Discord Auth Token is required')
}
