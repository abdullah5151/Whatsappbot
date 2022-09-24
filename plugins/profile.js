const {
	bot,
	getName,
	formatTime,
	jidToNum,
	getGids,
	parsedJid,
	isUser,
	isGroup,
} = require('../lib/')
const fm = true

bot(
	{
		pattern: 'jid',
		fromMe: fm,
		desc: 'Grup/Chat jid ini verir.',
		type: 'user',
	},
	async (message, match) => {
		return await message.send(
			message.mention[0] || message.reply_message.jid || message.jid
		)
	}
)

bot(
	{
		pattern: 'left',
		fromMe: fm,
		dec: 'Gruptan ayrılmak için',
		type: 'user',
		onlyGroup: true,
	},
	async (message, match) => {
		if (match) await message.send(match)
		return await message.leftFromGroup(message.jid)
	}
)

bot(
	{
		pattern: 'block',
		fromMe: fm,
		desc: 'Bir kişiyi engeller',
		type: 'user',
	},
	async (message, match) => {
		const id =
			message.mention[0] ||
			message.reply_message.jid ||
			(!message.isGroup && message.jid)
		if (!id) return await message.send('*Birisini yanıtla!/etiketle*')
		await message.send('_Engellendi_')
		await message.Block(id)
	}
)

bot(
	{
		pattern: 'unblock',
		fromMe: fm,
		desc: 'Bir kişinin engellemesini kaldır',
		type: 'user',
	},
	async (message, match) => {
		const id =
			message.mention[0] ||
			message.reply_message.jid ||
			(!message.isGroup && message.jid)
		if (!id) return await message.send('*Birisini yanıtla!/etiketle*')
		await message.send('_Engel açıldı!_')
		await message.Unblock(id)
	}
)

bot(
	{
		pattern: 'pp',
		fromMe: fm,
		desc: 'Profil resmini değiştirir',
		type: 'user',
	},
	async (message, match) => {
		if (!message.reply_message || !message.reply_message.image)
			return await message.send('*Bir fotoğrafı yanıtla!*')
		await message.updateProfilePicture(
			await message.reply_message.downloadMediaMessage()
		)
		return await message.send('_Profil Resmi Güncellendi!_')
	}
)

bot(
	{
		pattern: 'whois ?(.*)',
		fromMe: fm,
		desc: 'PP ve Biografi hakında.',
		type: 'misc',
	},
	async (message, match) => {
		match = parsedJid(match)[0]
		const gid = (isGroup(match) && match) || message.jid
		const id =
			(isUser(match) && match) ||
			message.mention[0] ||
			message.reply_message.jid
		let pp = ''
		try {
			pp = await message.profilePictureUrl(id || gid)
		} catch (error) {
			pp = 'https://cdn.wallpapersafari.com/0/83/zKyWb6.jpeg'
		}
		let caption = ''
		if (id) {
			try {
				const { status, setAt } = await message.fetchStatus(id)
				caption += `*Name :* ${await getName(gid, id)}\n*Num :* +${jidToNum(
					id
				)}\n*About :* ${status}\n*setAt :* ${formatTime(setAt, id)}`
			} catch (error) {}
		} else {
			const { subject, size, creation, desc, owner } =
				await message.groupMetadata(gid, !!gid)
			caption += `*Name :* ${subject}\n*Owner :* ${owner ? '+' : ''}${jidToNum(
				owner
			)}\n*Members :* ${size}\n*Created :* ${formatTime(
				creation
			)}\n*Desc :* ${desc}`
		}
		return await message.sendFromUrl(pp, { caption })
	}
)

bot(
	{
		pattern: 'gjid',
		fromMe: fm,
		desc: 'grup kişilerini listeler',
		type: 'user',
	},
	async (message, match) => {
		const gids = await getGids()
		let msg = ''
		for (const { name, id } of gids) msg += `*${name} :* ${id}\n\n`
		await message.send(msg.trim())
	}
)
