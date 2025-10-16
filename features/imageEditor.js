const { MessageMedia } = require('whatsapp-web.js');
const sharp = require('sharp');
const fs = require('fs-extra');

async function imageEditor(msg, client, effect) {
    try {
        if (!msg.hasMedia) {
            const quotedMsg = await msg.getQuotedMessage();
            if (!quotedMsg || !quotedMsg.hasMedia) {
                return msg.reply('❌ Kirim gambar dengan caption !blur atau !grayscale\nAtau reply gambar dengan perintah tersebut');
            }
            msg = quotedMsg;
        }

        await msg.reply('⏳ Memproses gambar...');

        const media = await msg.downloadMedia();
        
        if (!media.mimetype.includes('image')) {
            return msg.reply('❌ File harus berupa gambar!');
        }

        const buffer = Buffer.from(media.data, 'base64');
        const filename = `./temp/edited_${Date.now()}.jpg`;

        let imageProcessor = sharp(buffer);

        // Apply effect
        if (effect === 'blur') {
            imageProcessor = imageProcessor.blur(10);
        } else if (effect === 'grayscale') {
            imageProcessor = imageProcessor.grayscale();
        }

        await imageProcessor.jpeg().toFile(filename);

        const editedMedia = MessageMedia.fromFilePath(filename);
        await client.sendMessage(msg.from, editedMedia, {
            caption: `✅ Gambar dengan efek *${effect}*`
        });

        // Cleanup
        fs.unlinkSync(filename);

    } catch (error) {
        console.error('Image editor error:', error);
        return msg.reply('❌ Gagal memproses gambar.');
    }
}

module.exports = { imageEditor };
