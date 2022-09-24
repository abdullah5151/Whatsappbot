const { bot } = require('../lib/')
const { restartInstance } = require('../lib/pm2')
bot(
	{
		pattern: 'reboot ?(.*)',
		fromMe: true,
		desc: 'Botu yeniden başlatır',
		type: 'misc',
	},
	async (message, match) => {
		await message.send(`_Yeniden başlatılıyor..._`)
		restartInstance()
	}
)
