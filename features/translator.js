const translate = require('google-translate-api-x');

async function translator(msg, client) {
    try {
        const parts = msg.body.split(' ');
        
        if (parts.length < 3) {
            return msg.reply('❌ Format: !translate [kode bahasa] [teks]\nContoh: !translate en Halo, apa kabar?\n\nKode bahasa: en (Inggris), id (Indonesia), ar (Arab), ja (Jepang), ko (Korea), zh (China)');
        }

        const targetLang = parts[1].toLowerCase();
        const text = parts.slice(2).join(' ');

        if (text.length > 500) {
            return msg.reply('❌ Teks terlalu panjang! Maksimal 500 karakter.');
        }

        await msg.reply('⏳ Menerjemahkan...');

        const result = await translate(text, { to: targetLang });

        const translationText = `
🌐 *TRANSLATOR*

📝 *Original (${result.from.language.iso}):*
${text}

✅ *Translation (${targetLang}):*
${result.text}

━━━━━━━━━━━━━━━━━━━━
💡 Kode bahasa yang didukung:
   en, id, ar, ja, ko, zh, es, fr, de, dll
`;

        await msg.reply(translationText);

    } catch (error) {
        console.error('Translator error:', error);
        return msg.reply('❌ Gagal menerjemahkan. Periksa kode bahasa atau coba lagi nanti.');
    }
}

module.exports = { translator };
