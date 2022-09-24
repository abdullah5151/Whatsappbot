const asn = require('../events');
asn.addCommand({pattern: 'komut', fromMe: true}, (async (message, match) => {

    await message.sendMessage('Bu bir testtir');
    
}));