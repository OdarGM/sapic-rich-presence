var DiscordRPC = require('discord-rpc');

const clientId = '477048998176489472'
const rpc = new DiscordRPC.Client({ transport: 'ipc' })

async function setActivity () {
  if (!rpc) {
    return
  }

  rpc.setActivity({
    largeImageKey: 'steam_design_massive_png',
    largeImageText: 'Steam.Design',
    instance: false
  })
}

rpc.on('ready', () => {
  setActivity()

  setInterval(() => {
    setActivity()
  }, 15000)
})

rpc.login({ clientId }).catch(console.error)