const { MessageMedia } = require('whatsapp-web.js');
const sharp = require('sharp');
const fs = require('fs-extra');

async function stickerMaker(msg, client) {
    try {
        if (!msg.hasMedia) {
            // Check if quoted message has media
            const quotedMsg = await msg.getQuotedMessage();
            if (!quotedMsg || !quotedMsg.hasMedia) {
                return msg.reply('❌ Kirim gambar dengan caption !sticker atau reply gambar dengan !sticker');
            }
            msg = quotedMsg;
        }

        await msg.reply('⏳ Membuat sticker...');

        const media = await msg.downloadMedia();
        
        if (!media.mimetype.includes('image')) {
            return msg.reply('❌ Hanya bisa membuat sticker dari gambar!');
        }

        // Convert to WebP format for sticker
        const buffer = Buffer.from(media.data, 'base64');
        const filename = `./temp/sticker_${Date.now()}.webp`;

        // Resize and convert to WebP
        await sharp(buffer)
            .resize(512, 512, {
                fit: 'contain',
                background: { r: 0, g: 0, b: 0, alpha: 0 }
            })
            .webp()
            .toFile(filename);

        const sticker = MessageMedia.fromFilePath(filename);
        await client.sendMessage(msg.from, sticker, { sendMediaAsSticker: true });

        // Cleanup
        fs.unlinkSync(filename);

    } catch (error) {
        console.error('Sticker error:', error);
        return msg.reply('❌ Gagal membuat sticker. Pastikan file adalah gambar yang valid.');
    }
}

module.exports = { stickerMaker };
