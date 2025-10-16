const axios = require('axios');

async function quranVerses(msg, client) {
    try {
        const parts = msg.body.split(' ');
        let surah = parts[1] ? parseInt(parts[1]) : null;
        let ayat = parts[2] ? parseInt(parts[2]) : null;

        // If no specific verse, get random
        if (!surah) {
            surah = Math.floor(Math.random() * 114) + 1;
        }

        await msg.reply('⏳ Mengambil ayat Al-Quran...');

        // Using Al-Quran API
        const response = await axios.get(`https://api.alquran.cloud/v1/surah/${surah}`);

        if (!response.data || !response.data.data) {
            return msg.reply('❌ Gagal mengambil data Al-Quran.');
        }

        const surahData = response.data.data;
        
        // If no specific ayat, get random from the surah
        if (!ayat) {
            ayat = Math.floor(Math.random() * surahData.numberOfAyahs) + 1;
        }

        if (ayat > surahData.numberOfAyahs) {
            return msg.reply(`❌ Surah ${surahData.englishName} hanya memiliki ${surahData.numberOfAyahs} ayat.`);
        }

        const ayatData = surahData.ayahs[ayat - 1];

        // Get Indonesian translation
        const translationResponse = await axios.get(`https://api.alquran.cloud/v1/ayah/${surah}:${ayat}/id.indonesian`);
        const translation = translationResponse.data.data;

        const quranText = `
📖 *AL-QURAN*

🕌 *Surah:* ${surahData.englishName} (${surahData.name})
📝 *Ayat:* ${ayat}

${ayatData.text}

━━━━━━━━━━━━━━━━━━━━

🇮🇩 *Terjemahan:*
${translation.text}

━━━━━━━━━━━━━━━━━━━━
🕌 QS. ${surahData.englishName}:${ayat}
`;

        await msg.reply(quranText);

    } catch (error) {
        console.error('Quran error:', error);
        return msg.reply('❌ Gagal mengambil ayat Al-Quran. Format: !quran [nomor surah] [nomor ayat]\nContoh: !quran 2 255');
    }
}

module.exports = { quranVerses };
