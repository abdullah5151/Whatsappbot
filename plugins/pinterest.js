const { pinterest, bot, isUrl } = require('../lib/')

bot(
	{
		pattern: 'pinterest ?(.*)',
		fromMe: true,
		desc: 'Pinterestten video indirir/image',
		type: 'download',
	},
	async (message, match) => {
		match = isUrl(match || message.reply_message.text)
		if (!match) return await message.send('_Örnel : pinterest url_')
		const result = await pinterest(match)
		if (!result)
			return await message.send('*Bulunamadı!*', {
				quoted: message.quoted,
			})
		return await message.sendFromUrl(result)
	}
)
