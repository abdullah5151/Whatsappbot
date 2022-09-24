const { getFilter, bot, setFilter, deleteFilter, lydia } = require('../lib/')
const fm = true

bot(
	{
		pattern: 'stop ?(.*)',
		fromMe: fm,
		desc: 'Chat filter siler.',
		type: 'group',
		onlyGroup: true,
	},
	async (message, match) => {
		if (!match) return await message.send(`*Örnek : .stop Sa*`)
		const isDel = await deleteFilter(message.jid, match)
		if (!isDel)
			return await message.send(`_${match} Filter bulunamadı!_`)
		return await message.send(`_${match} Silindi._`)
	}
)

bot(
	{
		pattern: 'filter ?(.*)',
		fromMe: fm,
		desc: 'Gruba Filter eklemeye yarar',
		type: 'group',
		onlyGroup: true,
	},
	async (message, match) => {
		match = match.match(/[\'\"](.*?)[\'\"]/gms)
		if (!match) {
			const filters = await getFilter(message.jid)
			if (!filters)
				return await message.send(
					`_Herhangibir Filter yok_\n*Örnek*: \n*.filter 'Sa' 'Aleyküm Selam'*`
				)
			let msg = ''
			filters.map(({ pattern }) => {
				msg += `=> ${pattern} \n`
			})
			return await message.send(msg.trim())
		} else {
			if (match.length < 2) {
				return await message.send(`*.filter 'Sa' 'Aleyküm Selam'*`)
			}
			await setFilter(
				message.jid,
				match[0].replace(/['"]+/g, ''),
				match[1].replace(/['"]+/g, ''),
				match[0][0] === "'" ? true : false
			)
			await message.send(
				`_${match[0].replace(/['"]+/g, '')}_Eklenen Filter'lar.`
			)
		}
	}
)

bot(
	{ on: 'text', fromMe: false, type: 'filterOrLydia' },
	async (message, match) => {
		const filters = await getFilter(message.jid)
		if (filters)
			filters.map(async ({ pattern, regex, text }) => {
				pattern = new RegExp(regex ? pattern : `\\b(${pattern})\\b`, 'gm')
				if (pattern.test(message.text)) {
					await message.send(text, {
						quoted: message.data,
					})
				}
			})

		const isLydia = await lydia(message)
		if (isLydia)
			return await message.send(isLydia, { quoted: message.data })
	}
)

bot({ on: 'text', fromMe: true, type: 'lydia' }, async (message, match) => {
	const isLydia = await lydia(message)
	if (isLydia)
		return await message.send(isLydia, { quoted: message.data })
})
