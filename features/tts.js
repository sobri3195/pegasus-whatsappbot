const gtts = require('node-gtts')('id');
const fs = require('fs-extra');
const { MessageMedia } = require('whatsapp-web.js');

async function textToSpeech(msg, client) {
    try {
        const text = msg.body.substring(5).trim();

        if (!text) {
            return msg.reply('❌ Gunakan: !tts [teks]\nContoh: !tts Halo, apa kabar?');
        }

        if (text.length > 200) {
            return msg.reply('❌ Teks terlalu panjang! Maksimal 200 karakter.');
        }

        await msg.reply('⏳ Membuat audio...');

        const filename = `./temp/tts_${Date.now()}.mp3`;

        gtts.save(filename, text, function(err) {
            if (err) {
                console.error('TTS error:', err);
                return msg.reply('❌ Gagal membuat audio.');
            }

            try {
                const audio = MessageMedia.fromFilePath(filename);
                client.sendMessage(msg.from, audio, {
                    sendAudioAsVoice: true
                }).then(() => {
                    // Cleanup
                    fs.unlinkSync(filename);
                }).catch(sendError => {
                    console.error('Send audio error:', sendError);
                    msg.reply('❌ Gagal mengirim audio.');
                    if (fs.existsSync(filename)) fs.unlinkSync(filename);
                });
            } catch (mediaError) {
                console.error('Media error:', mediaError);
                msg.reply('❌ Gagal memproses audio.');
                if (fs.existsSync(filename)) fs.unlinkSync(filename);
            }
        });

    } catch (error) {
        console.error('TTS error:', error);
        return msg.reply('❌ Gagal membuat text-to-speech.');
    }
}

module.exports = { textToSpeech };
