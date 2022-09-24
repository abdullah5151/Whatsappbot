const { forwardOrBroadCast, bot, parsedJid } = require('../lib/')

bot(
	{
		pattern: 'forward ?(.*)',
		fromMe: true,
		desc: 'Cvaplanan mesajı kaydeder',
		type: 'misc',
	},
	async (message, match) => {
		if (!message.reply_message)
			return await message.send('*Bir mesajı yanıtla!*')
		for (const jid of parsedJid(match)) await forwardOrBroadCast(jid, message)
	}
)

bot(
	{
		pattern: 'save ?(.*)',
		fromMe: true,
		desc: 'Cevaplanan mesajı kaydeder.',
		type: 'misc',
	},
	async (message, match) => {
		if (!message.reply_message)
			return await message.send('*Bir mesajı yanıtla!*')
		await forwardOrBroadCast(message.participant, message)
	}
)
