const { bot, isAdmin } = require('../lib')

bot(
	{
		pattern: 'dlt ?(.*)',
		fromMe: true,
		desc: 'Cevaplanan Mesajı Siler.',
		type: 'whatsapp',
	},
	async (message, match) => {
		if (!message.reply_message)
			return await message.send('*Lütfen, bir mesajı yanıtlayın*')
		const key = message.reply_message.key
		if (!key.fromMe && message.isGroup) {
			const participants = await message.groupMetadata(message.jid)
			const isImAdmin = await isAdmin(participants, message.client.user.jid)
			if (!isImAdmin) return await message.send(`_Ben Bu Grupta Admin Değilim._`)
		}
		return await message.send(key, {}, 'delete')
	}
)
