const { bot } = require('../lib/')

bot(
	{
		pattern: 'fullpp ?(.*)',
		fromMe: true,
		desc: 'tam boy profil resmini ayarla',
		type: 'user',
	},
	async (message, match) => {
		if (!message.reply_message || !message.reply_message.image)
			return await message.send('*Bir resmi yanıtla.*')
		await message.updateProfilePicture(
			await message.reply_message.downloadMediaMessage(),
			message.client.user.jid
		)
		return await message.send('_Profil Resmi Güncellendi_')
	}
)
