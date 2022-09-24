const { bot } = require('../lib/')
bot(
	{
		pattern: 'react ?(.*)',
		fromMe: true,
		desc: 'Mesaja tepki verir',
		type: 'misc',
	},
	async (message, match) => {
		if (!match || !message.reply_message)
			return await message.send('_Örnek : react ❣_')
		return await message.send(
			{
				text: match,
				key: message.reply_message.key,
			},
			{},
			'react'
		)
	}
)
