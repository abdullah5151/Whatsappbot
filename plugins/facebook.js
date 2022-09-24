const { facebook, bot, genButtonMessage, isUrl } = require('../lib/')

bot(
	{
		pattern: 'fb ?(.*)',
		fromMe: true,
		desc: 'Facebook tan video indirmeye yarar',
		type: 'download',
	},
	async (message, match) => {
		match = isUrl(match || message.reply_message.text)
		if (!match) return await message.send('_Example : fb url_')
		const result = await facebook(match)
		if (!result.length)
			return await message.send('*Error! \nBulunamadı*', {
				quoted: message.quoted,
			})
		return await message.send(
			await genButtonMessage(
				result.map((e) => ({
					id: `upload ${e.url}`,
					text: e.quality,
				})),
				'Video Kalitesini Seçin'
			),
			{},
			'button'
		)
	}
)
