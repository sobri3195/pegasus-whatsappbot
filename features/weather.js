const axios = require('axios');

async function weatherInfo(msg, client) {
    try {
        const city = msg.body.split(' ').slice(1).join(' ');

        if (!city) {
            return msg.reply('❌ Gunakan: !cuaca [nama kota]\nContoh: !cuaca Jakarta');
        }

        await msg.reply('⏳ Mengambil data cuaca...');

        // Using Open-Meteo API (free, no API key required)
        // First get coordinates from city name using geocoding
        const geoResponse = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=id`);

        if (!geoResponse.data.results || geoResponse.data.results.length === 0) {
            return msg.reply('❌ Kota tidak ditemukan. Coba nama kota lain.');
        }

        const location = geoResponse.data.results[0];
        const { latitude, longitude, name, country } = location;

        // Get weather data
        const weatherResponse = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`);

        const weather = weatherResponse.data.current_weather;

        // Weather code interpretation
        const weatherCodes = {
            0: '☀️ Cerah',
            1: '🌤️ Cerah Sebagian',
            2: '⛅ Berawan Sebagian',
            3: '☁️ Berawan',
            45: '🌫️ Berkabut',
            48: '🌫️ Kabut Tebal',
            51: '🌦️ Gerimis Ringan',
            61: '🌧️ Hujan Ringan',
            63: '🌧️ Hujan Sedang',
            65: '⛈️ Hujan Lebat',
            80: '🌦️ Hujan Shower',
            95: '⛈️ Badai Petir'
        };

        const weatherDesc = weatherCodes[weather.weathercode] || '🌍 Kondisi Cuaca';

        const weatherText = `
🌍 *INFORMASI CUACA*

📍 *Lokasi:* ${name}, ${country}
🌡️ *Suhu:* ${weather.temperature}°C
💨 *Kecepatan Angin:* ${weather.windspeed} km/h
🧭 *Arah Angin:* ${weather.winddirection}°
${weatherDesc}

⏰ *Waktu Update:* ${new Date(weather.time).toLocaleString('id-ID')}

━━━━━━━━━━━━━━━━━━━━
Powered by Open-Meteo
`;

        await msg.reply(weatherText);

    } catch (error) {
        console.error('Weather error:', error);
        return msg.reply('❌ Gagal mengambil data cuaca. Coba lagi nanti.');
    }
}

module.exports = { weatherInfo };
