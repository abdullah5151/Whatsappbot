const { bot, photoEditor } = require('../lib/')
const fm = true

bot(
	{
		pattern: 'skull',
		fromMe: fm,
		type: 'editor',
		desc: 'Skull Fotoğraf editleyici.',
	},
	async (message, match) => {
		if (!message.reply_message || !message.reply_message.image)
			return await message.send('*Bir Fotoğrafı yanıtla!.*')
		const { status, result } = await photoEditor(
			await message.reply_message.downloadAndSaveMediaMessage(),
			'skull'
		)
		if (!status) return await message.send(result)
		return await message.sendFromUrl(result)
	}
)
bot(
	{
		pattern: 'sketch',
		fromMe: fm,
		type: 'editor',
		desc: 'Sketch Fotoğraf editleyici.',
	},
	async (message, match) => {
		if (!message.reply_message || !message.reply_message.image)
			return await message.send('*Bir Fotoğrafı yanıtla!.*')
		const { status, result } = await photoEditor(
			await message.reply_message.downloadAndSaveMediaMessage(),
			'sketch'
		)
		if (!status) return await message.send(result)
		return await message.sendFromUrl(result)
	}
)

bot(
	{
		pattern: 'pencil',
		fromMe: fm,
		type: 'editor',
		desc: 'pencil Fotoğraf editleyici.',
	},
	async (message, match) => {
		if (!message.reply_message || !message.reply_message.image)
			return await message.send('*Bir Fotoğrafı yanıtla!.*')
		const { status, result } = await photoEditor(
			await message.reply_message.downloadAndSaveMediaMessage(),
			'pencil'
		)
		if (!status) return await message.send(result)
		return await message.sendFromUrl(result)
	}
)

bot(
	{
		pattern: 'color',
		fromMe: fm,
		type: 'editor',
		desc: 'Fotoğraf rengini editler.',
	},
	async (message, match) => {
		if (!message.reply_message || !message.reply_message.image)
			return await message.send('*Bir Fotoğrafı yanıtla!*')
		const { status, result } = await photoEditor(
			await message.reply_message.downloadAndSaveMediaMessage(),
			'color'
		)
		if (!status) return await message.send(result)
		return await message.sendFromUrl(result)
	}
)

bot(
	{
		pattern: 'kiss',
		fromMe: fm,
		type: 'editor',
		desc: 'kiss Fotoğraf Editleyici.',
	},
	async (message, match) => {
		if (!message.reply_message || !message.reply_message.image)
			return await message.send('*Bir Fotoğrafı yanıtla!*')
		const { status, result } = await photoEditor(
			await message.reply_message.downloadAndSaveMediaMessage(),
			'kiss'
		)
		if (!status) return await message.send(result)
		return await message.sendFromUrl(result)
	}
)

bot(
	{
		pattern: 'bokeh',
		fromMe: fm,
		type: 'editor',
		desc: 'bokeh Fotoğraf editleyici.',
	},
	async (message, match) => {
		if (!message.reply_message || !message.reply_message.image)
			return await message.send('*Bir Fotoğrafı yanıtla!*')
		const { status, result } = await photoEditor(
			await message.reply_message.downloadAndSaveMediaMessage(),
			'bokeh'
		)
		if (!status) return await message.send(result)
		return await message.sendFromUrl(result)
	}
)

bot(
	{
		pattern: 'wanted',
		fromMe: fm,
		type: 'editor',
		desc: 'Wanted Fotoğraf editleyici.',
	},
	async (message, match) => {
		if (!message.reply_message || !message.reply_message.image)
			return await message.send('*Bir Fotoğrafı yanıtla!*')
		const { status, result } = await photoEditor(
			await message.reply_message.downloadAndSaveMediaMessage(),
			'wanted'
		)
		if (!status) return await message.send(result)
		return await message.sendFromUrl(result)
	}
)

bot(
	{
		pattern: 'look',
		fromMe: fm,
		type: 'editor',
		desc: 'Dramatic Look Fotoğraf editleyici.',
	},
	async (message, match) => {
		if (!message.reply_message || !message.reply_message.image)
			return await message.send('*Bir Fotoğrafı yanıtla!.*')
		const { status, result } = await photoEditor(
			await message.reply_message.downloadAndSaveMediaMessage(),
			'look'
		)
		if (!status) return await message.send(result)
		return await message.sendFromUrl(result)
	}
)

bot(
	{
		pattern: 'gandm',
		fromMe: fm,
		type: 'editor',
		desc: 'Dramatic Look Fotoğraf editleyici.',
	},
	async (message, match) => {
		if (!message.reply_message || !message.reply_message.image)
			return await message.send('*Bir Fotoğrafı yanıtla!.*')
		const { status, result } = await photoEditor(
			await message.reply_message.downloadAndSaveMediaMessage(),
			'gandm'
		)
		if (!status) return await message.send(result)
		return await message.sendFromUrl(result)
	}
)

bot(
	{
		pattern: 'dark',
		fromMe: fm,
		type: 'editor',
		desc: 'Dramatic Look Fotoğraf editleyici.',
	},
	async (message, match) => {
		if (!message.reply_message || !message.reply_message.image)
			return await message.send('*Bir Fotoğrafı yanıtla!.*')
		const { status, result } = await photoEditor(
			await message.reply_message.downloadAndSaveMediaMessage(),
			'dark'
		)
		if (!status) return await message.send(result)
		return await message.sendFromUrl(result)
	}
)

bot(
	{
		pattern: 'makeup',
		fromMe: fm,
		type: 'editor',
		desc: 'Dramatic Look Fotoğraf editleyici.',
	},
	async (message, match) => {
		if (!message.reply_message || !message.reply_message.image)
			return await message.send('*Bir Fotoğrafı yanıtla!.*')
		const { status, result } = await photoEditor(
			await message.reply_message.downloadAndSaveMediaMessage(),
			'makeup'
		)
		if (!status) return await message.send(result)
		return await message.sendFromUrl(result)
	}
)

bot(
	{
		pattern: 'cartoon',
		fromMe: fm,
		type: 'editor',
		desc: 'Dramatic Look Fotoğraf editleyici.',
	},
	async (message, match) => {
		if (!message.reply_message || !message.reply_message.image)
			return await message.send('*Bir Fotoğrafı yanıtla!.*')
		const { status, result } = await photoEditor(
			await message.reply_message.downloadAndSaveMediaMessage(),
			'cartoon'
		)
		if (!status) return await message.send(result)
		return await message.sendFromUrl(result)
	}
)

bot(
	{
		pattern: 'demon',
		fromMe: fm,
		type: 'editor',
		desc: 'demon Look Fotoğraf editleyici.',
	},
	async (message, match) => {
		if (!message.reply_message || !message.reply_message.image)
			return await message.send('*Bir Fotoğrafı yanıtla!.*')
		const { status, result } = await photoEditor(
			await message.reply_message.downloadAndSaveMediaMessage(),
			'demon'
		)
		if (!status) return await message.send(result)
		return await message.sendFromUrl(result)
	}
)

bot(
	{
		pattern: 'bloody',
		fromMe: fm,
		type: 'editor',
		desc: 'bloody Look Fotoğraf editleyici.',
	},
	async (message, match) => {
		if (!message.reply_message || !message.reply_message.image)
			return await message.send('*Bir Fotoğrafı yanıtla!.*')
		const { status, result } = await photoEditor(
			await message.reply_message.downloadAndSaveMediaMessage(),
			'bloody'
		)
		if (!status) return await message.send(result)
		return await message.sendFromUrl(result)
	}
)

bot(
	{
		pattern: 'zombie',
		fromMe: fm,
		type: 'editor',
		desc: 'zombie Look Fotoğraf editleyici.',
	},
	async (message, match) => {
		if (!message.reply_message || !message.reply_message.image)
			return await message.send('*Bir Fotoğrafı yanıtla!.*')
		const { status, result } = await photoEditor(
			await message.reply_message.downloadAndSaveMediaMessage(),
			'zombie'
		)
		if (!status) return await message.send(result)
		return await message.sendFromUrl(result)
	}
)

bot(
	{
		pattern: 'horned',
		fromMe: fm,
		type: 'editor',
		desc: 'horned Look Fotoğraf editleyici.',
	},
	async (message, match) => {
		if (!message.reply_message || !message.reply_message.image)
			return await message.send('*Bir Fotoğrafı yanıtla!.*')
		const { status, result } = await photoEditor(
			await message.reply_message.downloadAndSaveMediaMessage(),
			'horned'
		)
		if (!status) return await message.send(result)
		return await message.sendFromUrl(result)
	}
)
