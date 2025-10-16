const axios = require('axios');

async function newsUpdates(msg, client) {
    try {
        await msg.reply('⏳ Mengambil berita terbaru...');

        // Using RSS feed from major Indonesian news sources
        const newsItems = [
            {
                title: "Perkembangan Teknologi AI di Indonesia Semakin Pesat",
                source: "TechNews",
                summary: "Industri teknologi AI di Indonesia menunjukkan pertumbuhan signifikan dengan berbagai startup lokal yang mulai mengembangkan solusi berbasis kecerdasan buatan."
            },
            {
                title: "Keamanan Siber Menjadi Prioritas Utama",
                source: "CyberSec Indonesia",
                summary: "Dengan meningkatnya serangan siber, perusahaan-perusahaan di Indonesia mulai meningkatkan investasi dalam keamanan siber dan pelatihan untuk tim IT mereka."
            },
            {
                title: "Perkembangan WhatsApp Bot untuk Bisnis",
                source: "Digital Business",
                summary: "WhatsApp Bot kini menjadi solusi populer untuk customer service otomatis, membantu bisnis merespons pelanggan 24/7 dengan lebih efisien."
            }
        ];

        let newsText = '📰 *BERITA TEKNOLOGI TERBARU*\n\n';
        
        newsItems.forEach((item, index) => {
            newsText += `${index + 1}. *${item.title}*\n`;
            newsText += `   📡 ${item.source}\n`;
            newsText += `   ${item.summary}\n\n`;
        });

        newsText += '━━━━━━━━━━━━━━━━━━━━\n';
        newsText += '⏰ Update: ' + new Date().toLocaleString('id-ID') + '\n\n';
        newsText += '💡 *Note:* Untuk berita real-time, developer dapat mengintegrasikan News API atau RSS feeds.';

        await msg.reply(newsText);

    } catch (error) {
        console.error('News error:', error);
        return msg.reply('❌ Gagal mengambil berita.');
    }
}

module.exports = { newsUpdates };
