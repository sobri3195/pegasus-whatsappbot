const axios = require('axios');

async function currencyConverter(msg, client) {
    try {
        const parts = msg.body.split(' ');
        
        if (parts.length < 4) {
            return msg.reply('❌ Format: !kurs [jumlah] [dari] [ke]\nContoh: !kurs 100 USD IDR');
        }

        const amount = parseFloat(parts[1]);
        const from = parts[2].toUpperCase();
        const to = parts[3].toUpperCase();

        if (isNaN(amount)) {
            return msg.reply('❌ Jumlah harus berupa angka!');
        }

        await msg.reply('⏳ Mengkonversi mata uang...');

        // Using Exchange Rate API (free tier)
        const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${from}`);
        
        if (!response.data || !response.data.rates) {
            return msg.reply('❌ Gagal mengambil data kurs.');
        }

        const rate = response.data.rates[to];
        
        if (!rate) {
            return msg.reply(`❌ Mata uang ${to} tidak ditemukan!`);
        }

        const result = amount * rate;
        const formatted = new Intl.NumberFormat('id-ID', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(result);

        const conversionText = `
💱 *KONVERSI MATA UANG*

${amount} ${from} = ${formatted} ${to}

📊 *Rate:* 1 ${from} = ${rate.toFixed(4)} ${to}
⏰ *Update:* ${new Date(response.data.time_last_updated * 1000).toLocaleDateString('id-ID')}

━━━━━━━━━━━━━━━━━━━━
💡 Data real-time dari Exchange Rate API
`;

        await msg.reply(conversionText);

    } catch (error) {
        console.error('Currency converter error:', error);
        return msg.reply('❌ Gagal mengkonversi mata uang. Pastikan kode mata uang valid (contoh: USD, IDR, EUR).');
    }
}

module.exports = { currencyConverter };
