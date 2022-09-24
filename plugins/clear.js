const { bot } = require('../lib/')

bot(
	{
		pattern: 'clear ?(.*)',
		fromMe: true,
		desc: 'Chat i temizler',
		type: 'whatsapp',
	},
	async (message, match) => {
		await message.clearChat(message.jid)
		await message.send('_Cleared_')
	}
)
