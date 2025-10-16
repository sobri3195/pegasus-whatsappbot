const axios = require('axios');

async function prayerTimes(msg, client) {
    try {
        const city = msg.body.split(' ').slice(1).join(' ');

        if (!city) {
            return msg.reply('❌ Gunakan: !jadwalsholat [kota]\nContoh: !jadwalsholat Jakarta');
        }

        await msg.reply('⏳ Mengambil jadwal sholat...');

        // Get coordinates from city name
        const geoResponse = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=id`);

        if (!geoResponse.data.results || geoResponse.data.results.length === 0) {
            return msg.reply('❌ Kota tidak ditemukan. Coba nama kota lain.');
        }

        const location = geoResponse.data.results[0];
        const { latitude, longitude, name } = location;

        // Get prayer times using Aladhan API
        const today = new Date();
        const response = await axios.get(`https://api.aladhan.com/v1/timings/${today.getTime()}/1000?latitude=${latitude}&longitude=${longitude}&method=20`);

        if (!response.data || !response.data.data) {
            return msg.reply('❌ Gagal mengambil jadwal sholat.');
        }

        const timings = response.data.data.timings;
        const date = response.data.data.date;

        const prayerText = `
🕌 *JADWAL SHOLAT*

📍 *Lokasi:* ${name}
📅 *Tanggal:* ${date.readable}
${date.hijri.day} ${date.hijri.month.en} ${date.hijri.year} H

━━━━━━━━━━━━━━━━━━━━

🌅 *Subuh:* ${timings.Fajr}
🌄 *Terbit:* ${timings.Sunrise}
☀️ *Dzuhur:* ${timings.Dhuhr}
🌤️ *Ashar:* ${timings.Asr}
🌆 *Maghrib:* ${timings.Maghrib}
🌙 *Isya:* ${timings.Isha}

━━━━━━━━━━━━━━━━━━━━
⏰ Jangan lupa sholat tepat waktu!
`;

        await msg.reply(prayerText);

    } catch (error) {
        console.error('Prayer times error:', error);
        return msg.reply('❌ Gagal mengambil jadwal sholat. Coba lagi nanti.');
    }
}

module.exports = { prayerTimes };
