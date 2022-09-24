const { instagram, bot } = require('../lib/')

bot(
	{
		pattern: 'insta ?(.*)',
		fromMe: true,
		desc: 'İnstagram postunun indirmeye yarar.',
		type: 'download',
	},
	async (message, match) => {
		match = match || message.reply_message.text
		if (!match) return await message.send('_Example : insta url_')
		const result = await instagram(match)
		if (!result.length)
			return await message.send('*Bulunamadı*', {
				quoted: message.quoted,
			})
		for (const url of result) {
			await message.sendFromUrl(url)
		}
	}
)
