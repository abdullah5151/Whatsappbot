const {
	bot,
	parseGistUrls,
	getPlugin,
	setPlugin,
	pluginsList,
	delPlugin,
	genButtonMessage,
} = require('../lib/')
const { writeFileSync, unlinkSync } = require('fs')
const got = require('got')

bot(
	{
		pattern: 'plugin ?(.*)',
		fromMe: true,
		desc: 'Plugin yükler.',
		type: 'misc',
	},
	async (message, match) => {
		match = match || message.reply_message.text
		if (!match && match !== 'list')
			return await message.send('*Öernek :*\nplugin url\nplugin list')
		if (match == 'list') {
			const plugins = await getPlugin()
			if (!plugins) return await message.send(`*Plugin yüklenemedi!*`)
			let msg = ''
			plugins.map(({ name, url }) => {
				msg += `${name} : ${url}\n`
			})
			return await message.send('```' + msg + '```')
		}
		const isValidUrl = parseGistUrls(match)
		if (!isValidUrl) {
			const { url } = await getPlugin(match)
			if (url) return await message.send(url, { quoted: message.data })
		}
		if (!isValidUrl) return await message.send('*Geçersiz url!*')
		for (const url of isValidUrl) {
			try {
				const res = await got(url)
				if (res.statusCode == 200) {
					let plugin_name = /pattern: ["'](.*)["'],/g.exec(res.body)
					plugin_name = plugin_name[1].split(' ')[0]
					writeFileSync('./plugins/' + plugin_name + '.js', res.body)
					try {
						require('./' + plugin_name)
					} catch (e) {
						await message.send(e.stack, { quoted: message.quoted })
						return unlinkSync('./plugins/' + plugin_name + '.js')
					}
					await setPlugin(plugin_name, url)
					await message.send(
						`_Yeni yüklenen eklentiler : ${pluginsList(res.body).join(',')}_`
					)
				}
			} catch (error) {
				await message.send(`${error}\n${url}`)
			}
		}
	}
)

bot(
	{
		pattern: 'remove ?(.*)',
		fromMe: true,
		desc: 'Plugin siler.',
		type: 'misc',
	},
	async (message, match) => {
		if (!match)
			return await message.send('*Örnek :*\nremove mforward\nremove all')
		if (match == 'all') {
			await delPlugin()
			return await message.send(
				await genButtonMessage(
					[{ text: 'RESTART BOT', id: 'restart' }],
					'_Tüm eklentiler başarıyla silindi_'
				),
				{},
				'button'
			)
		}
		const isDeleted = await delPlugin(match)
		if (!isDeleted) return await message.send(`*Plugin ${match} not found*`)
		delete require.cache[require.resolve('../plugins/' + match + '.js')]
		unlinkSync('./plugins/' + match + '.js')
		return await message.send(
			await genButtonMessage(
				[
					{ text: 'RESTART', id: 'restart' },
					{ text: 'REBOOT', id: 'reboot' },
				],
				'_Plugin Silindi_'
			),
			{},
			'button'
		)
	}
)
