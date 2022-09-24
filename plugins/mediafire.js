const { mediafire, bot, isUrl } = require('../lib/index')

bot(
	{
		pattern: 'mediafire ?(.*)',
		fromMe: true,
		desc: 'Mediafire dan dosya indirir',
		type: 'download',
	},
	async (message, match) => {
		match = isUrl(match || message.reply_message.text)
		if (!match) return await message.send('_Örnek : https://mediafire/_')
		const result = await mediafire(match)
		if (!result)
			return await message.send('*Dosya bulunamadı!*', {
				quoted: message.quoted,
			})
		return await message.sendFromUrl(result)
	}
)
