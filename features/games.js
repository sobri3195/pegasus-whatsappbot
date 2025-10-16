const gameData = new Map();

async function gameSystem(msg, client) {
    try {
        const command = msg.body.toLowerCase();
        const chatId = msg.from;

        // Tebak Kata Game
        if (command === '!tebak') {
            const words = [
                { word: 'komputer', hint: 'Alat elektronik untuk mengolah data' },
                { word: 'internet', hint: 'Jaringan komputer global' },
                { word: 'programming', hint: 'Kegiatan membuat kode program' },
                { word: 'whatsapp', hint: 'Aplikasi chat yang sedang kamu gunakan' },
                { word: 'keyboard', hint: 'Alat input untuk mengetik' },
                { word: 'database', hint: 'Tempat menyimpan data terstruktur' },
                { word: 'algoritma', hint: 'Langkah-langkah sistematis untuk menyelesaikan masalah' },
                { word: 'cybersecurity', hint: 'Keamanan di dunia digital' },
                { word: 'developer', hint: 'Orang yang membuat aplikasi' },
                { word: 'opensource', hint: 'Software yang kode sumbernya terbuka' }
            ];

            const randomWord = words[Math.floor(Math.random() * words.length)];
            const scrambled = randomWord.word.split('').sort(() => Math.random() - 0.5).join('');

            gameData.set(chatId, {
                type: 'tebak',
                answer: randomWord.word.toLowerCase(),
                startTime: Date.now()
            });

            await msg.reply(`
🎮 *TEBAK KATA*

Susun huruf-huruf berikut menjadi kata yang benar:

🔤 *${scrambled.toUpperCase()}*

💡 *Hint:* ${randomWord.hint}

⏱️ Kamu punya waktu 60 detik!
Kirim jawabanmu sekarang!

━━━━━━━━━━━━━━━━━━━━
Ketik !tebak untuk main lagi
`);

            // Auto clear after 60 seconds
            setTimeout(() => {
                if (gameData.has(chatId) && gameData.get(chatId).type === 'tebak') {
                    gameData.delete(chatId);
                }
            }, 60000);
        }

        // Suit (Rock Paper Scissors)
        else if (command.startsWith('!suit ')) {
            const userChoice = command.split(' ')[1]?.toLowerCase();
            const choices = ['batu', 'kertas', 'gunting'];

            if (!choices.includes(userChoice)) {
                return msg.reply('❌ Pilihan tidak valid!\nGunakan: !suit [batu/kertas/gunting]\nContoh: !suit batu');
            }

            const botChoice = choices[Math.floor(Math.random() * choices.length)];
            
            let result;
            let emoji;

            if (userChoice === botChoice) {
                result = 'SERI!';
                emoji = '🤝';
            } else if (
                (userChoice === 'batu' && botChoice === 'gunting') ||
                (userChoice === 'kertas' && botChoice === 'batu') ||
                (userChoice === 'gunting' && botChoice === 'kertas')
            ) {
                result = 'KAMU MENANG! 🎉';
                emoji = '🏆';
            } else {
                result = 'KAMU KALAH! 😢';
                emoji = '😔';
            }

            const emojiMap = {
                'batu': '✊',
                'kertas': '✋',
                'gunting': '✌️'
            };

            await msg.reply(`
🎮 *SUIT (BATU KERTAS GUNTING)*

${emojiMap[userChoice]} *Kamu:* ${userChoice.toUpperCase()}
${emojiMap[botChoice]} *Bot:* ${botChoice.toUpperCase()}

${emoji} *${result}*

━━━━━━━━━━━━━━━━━━━━
Ketik !suit [pilihan] untuk main lagi!
`);
        }

        // Check answers for tebak kata
        else if (gameData.has(chatId)) {
            const game = gameData.get(chatId);
            
            if (game.type === 'tebak') {
                const userAnswer = msg.body.toLowerCase().trim();
                const timeTaken = Math.floor((Date.now() - game.startTime) / 1000);

                if (userAnswer === game.answer) {
                    gameData.delete(chatId);
                    await msg.reply(`
🎉 *BENAR!*

✅ Jawabannya adalah: *${game.answer.toUpperCase()}*
⏱️ Waktu: ${timeTaken} detik

🏆 Selamat! Kamu berhasil menebak dengan tepat!

━━━━━━━━━━━━━━━━━━━━
Ketik !tebak untuk main lagi!
`);
                } else if (timeTaken < 60) {
                    await msg.reply('❌ Salah! Coba lagi! ⏱️');
                }
            }
        }

    } catch (error) {
        console.error('Game system error:', error);
        return msg.reply('❌ Terjadi kesalahan dalam game.');
    }
}

module.exports = { gameSystem };
