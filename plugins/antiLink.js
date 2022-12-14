const { getAntiLink, bot, genButtonMessage, setAntiLink } = require('../lib/')

bot(
	{
		pattern: 'antilink ?(.*)',
		fromMe: true,
		desc: 'Antilink açmaya yarar.',
		type: 'group',
		onlyGroup: true,
	},
	async (message, match) => {
		const antilink = await getAntiLink(message.jid)
		if (!match) {
			const onOrOff = antilink.enabled ? 'off' : 'on'
			const button = await genButtonMessage(
				[
					{ id: 'antilink info', text: 'INFO' },
					{ id: `antilink ${onOrOff}`, text: onOrOff.toUpperCase() },
				],
				'Example\nhttps://github.com/lyfe00011/whatsapp-bot-md/wiki/antilink',
				'Antilink'
			)
			return await message.send(button, {}, 'button')
			// return await message.send(
			// 	await genHydratedButtons(
			// 		[
			// 			{
			// 				urlButton: {
			// 					text: 'Example',
			// 					url: 'https://github.com/lyfe00011/whatsapp-bot-md/wiki/antilink',
			// 				},
			// 			},
			// 			{
			// 				button: {
			// 					id: `antilink ${antilink.enabled ? 'off' : 'on'}`,
			// 					text: antilink.enabled ? 'OFF' : 'ON',
			// 				},
			// 			},
			// 			{ button: { id: 'antilink info', text: 'INFO' } },
			// 		],
			// 		'AntiLink'
			// 	),
			// 	{},
			// 	'template'
			// )
		}
		if (match == 'on' || match == 'off') {
			if (match == 'off' && !antilink)
				return await message.send('_AntiLink Kapalı._')
			await setAntiLink(message.jid, match == 'on')
			return await message.send(
				`_AntiLink ${match == 'on' ? 'Enabled' : 'Disabled.'}_`
			)
		}
		if (match == 'info')
			return await message.send(
				`*AntiLink :* ${antilink.enabled ? 'on' : 'off'}\n*AllowedUrl :* ${
					antilink.allowedUrls
				}\n*Action :* ${antilink.action}`
			)
		if (match.startsWith('action/')) {
			await setAntiLink(message.jid, match)
			const action = match.replace('action/', '')
			if (!['warn', 'kick', 'null'].includes(action))
				return await message.send('*Geçersiz komut*')
			return await message.send(`_Antilink artık ${action}_`)
		}
		await setAntiLink(message.jid, match)
		return await message.send(`_Antilink izin verilen url'ler ${match}_`)
	}
)
