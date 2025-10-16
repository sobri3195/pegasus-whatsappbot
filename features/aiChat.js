const axios = require('axios');

async function aiChat(msg, client) {
    try {
        const question = msg.body.substring(4).trim();

        if (!question) {
            return msg.reply('❌ Gunakan: !ai [pertanyaan]\nContoh: !ai Apa itu artificial intelligence?');
        }

        await msg.reply('🤖 AI sedang berpikir...');

        // Simple AI response using predefined knowledge
        // In production, you can integrate with OpenAI API or other AI services
        
        const responses = {
            'halo': 'Halo! Ada yang bisa saya bantu?',
            'siapa kamu': 'Saya adalah WhatsApp Bot yang dibuat oleh dr. Muhammad Sobri Maulana untuk membantu Anda!',
            'apa kabar': 'Saya baik-baik saja! Terima kasih sudah bertanya. Bagaimana dengan Anda?',
            'terima kasih': 'Sama-sama! Senang bisa membantu Anda. 😊',
        };

        // Check for exact matches
        const lowerQuestion = question.toLowerCase();
        for (let key in responses) {
            if (lowerQuestion.includes(key)) {
                return msg.reply(`🤖 *AI Response:*\n\n${responses[key]}`);
            }
        }

        // Default intelligent response
        const aiResponse = `
🤖 *AI Response:*

Terima kasih atas pertanyaan Anda tentang "${question}".

Saya adalah bot sederhana yang masih dalam pengembangan. Untuk jawaban yang lebih detail dan akurat, Anda bisa:

1. Mencari di Google: https://www.google.com/search?q=${encodeURIComponent(question)}
2. Bertanya ke komunitas di grup WhatsApp kami
3. Menghubungi developer untuk fitur AI yang lebih canggih

💡 *Tips:* Developer dapat mengintegrasikan OpenAI GPT API untuk respon AI yang lebih pintar!

━━━━━━━━━━━━━━━━━━━━
Ketik !info untuk kontak developer
`;

        await msg.reply(aiResponse);

    } catch (error) {
        console.error('AI chat error:', error);
        return msg.reply('❌ Gagal memproses pertanyaan AI.');
    }
}

module.exports = { aiChat };
