import { Client, ActivityType } from 'discord.js'

import { DISCORD_AUTH_TOKEN } from './src/config/constants'

const client = new Client({
  intents: [131071]
})

client.on('ready', async () => {
  console.log(`Ha iniciado sesión como ${client.user?.tag ?? 'Desconocido'}`)
  client.user?.setActivity('Existiendo', {
    name: 'Existiendo',
    type: ActivityType.Playing
  })
})

void client.login(DISCORD_AUTH_TOKEN)
