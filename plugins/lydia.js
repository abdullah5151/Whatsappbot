const { setLydia, bot } = require('../lib/')

bot(
	{
		pattern: 'lydia ?(.*)',
		fromMe: true,
		desc: 'Chat botunu açıp, kapatmaya yarar.',
		type: 'misc',
	},
	async (message, match) => {
		if (!match)
			return await message.send(
				'*Örnek : lydia on/off*._'
			)
		const user = message.mention[0] || message.reply_message.jid
		await setLydia(message.jid, match == 'on', user)
		await message.send(
			`_Lydia ${
				match == 'on' ? 'Activated' : 'Deactivated'
			}_\n*Yanlızca yanıt mesajı ile çalışır*.`
		)
	}
)
