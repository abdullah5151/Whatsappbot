const { bot, apkMirror, genListMessage, genButtonMessage } = require('../lib')
bot(
	{
		pattern: 'apk ?(.*)',
		fromMe: true,
		desc: `apkmirror'dan apk yüklemenize yarar.`,
		type: 'download',
	},
	async (message, match) => {
		if (!match) return await message.send('*Example : apk Mixplorer*')
		const { result, status } = await apkMirror(match)
		if (status > 400) {
			if (!result.length)
				return await message.send(
					'_Eşleşen bir sonuç bulunamadı_'
				)
			const list = []
			for (const { title, url } of result)
				list.push({ id: `apk ${status};;${url}`, text: title })
			return await message.send(
				genListMessage(list, 'Aramanız ile eşleşen uygulamalar', 'DOWNLOAD'),
				{},
				'list'
			)
		}
		if (status > 200) {
			const button = []
			for (const apk in result)
				button.push({
					id: `apk ${status};;${result[apk].url}`,
					text: result[apk].title,
				})
			return await message.send(
				await genButtonMessage(button, 'Kullanılabilir apklar'),
				{},
				'button'
			)
		}
		return await message.sendFromUrl(result)
	}
)
