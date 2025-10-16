const axios = require('axios');

async function shortUrl(msg, client) {
    try {
        const url = msg.body.split(' ')[1];

        if (!url) {
            return msg.reply('❌ Gunakan: !shorturl [URL]\nContoh: !shorturl https://github.com/sobri3195');
        }

        // Validate URL
        try {
            new URL(url);
        } catch (e) {
            return msg.reply('❌ URL tidak valid! Pastikan URL dimulai dengan http:// atau https://');
        }

        await msg.reply('⏳ Memperpendek URL...');

        // Using TinyURL API (free, no registration required)
        try {
            const response = await axios.get(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
            
            const shortUrl = response.data;

            const urlText = `
🔗 *URL SHORTENER*

📎 *Original URL:*
${url}

✂️ *Short URL:*
${shortUrl}

━━━━━━━━━━━━━━━━━━━━
💡 URL yang lebih pendek dan mudah dibagikan!
`;

            await msg.reply(urlText);

        } catch (apiError) {
            // Fallback: use is.gd API
            const response = await axios.get(`https://is.gd/create.php?format=simple&url=${encodeURIComponent(url)}`);
            
            const shortUrl = response.data;

            const urlText = `
🔗 *URL SHORTENER*

📎 *Original URL:*
${url}

✂️ *Short URL:*
${shortUrl}

━━━━━━━━━━━━━━━━━━━━
💡 URL yang lebih pendek dan mudah dibagikan!
`;

            await msg.reply(urlText);
        }

    } catch (error) {
        console.error('Short URL error:', error);
        return msg.reply('❌ Gagal memperpendek URL. Coba lagi nanti.');
    }
}

module.exports = { shortUrl };
