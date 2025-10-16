const { MessageMedia } = require('whatsapp-web.js');
const sharp = require('sharp');
const fs = require('fs-extra');

async function memeGenerator(msg, client) {
    try {
        if (!msg.hasMedia) {
            const quotedMsg = await msg.getQuotedMessage();
            if (!quotedMsg || !quotedMsg.hasMedia) {
                return msg.reply('❌ Kirim gambar dengan caption !meme [teks atas|teks bawah]\nAtau reply gambar dengan !meme [teks atas|teks bawah]\n\nContoh: !meme Saat coding|Bug muncul lagi');
            }
            msg = quotedMsg;
        }

        const text = msg.body.substring(6).trim() || msg._data.caption?.substring(6).trim();

        if (!text) {
            return msg.reply('❌ Format: !meme [teks atas|teks bawah]\nContoh: !meme Saat deadline|Tapi masih santai');
        }

        await msg.reply('⏳ Membuat meme...');

        const media = await msg.downloadMedia();
        
        if (!media.mimetype.includes('image')) {
            return msg.reply('❌ File harus berupa gambar!');
        }

        const buffer = Buffer.from(media.data, 'base64');
        const [topText, bottomText] = text.split('|').map(t => t.trim());

        // Get image dimensions
        const metadata = await sharp(buffer).metadata();
        const { width, height } = metadata;

        // Create text SVG overlays
        const fontSize = Math.floor(width / 15);
        const strokeWidth = Math.floor(fontSize / 10);

        const svgTop = topText ? `
            <svg width="${width}" height="${height}">
                <style>
                    .title { 
                        fill: white; 
                        font-size: ${fontSize}px; 
                        font-weight: bold; 
                        font-family: Impact, Arial Black, sans-serif;
                        text-anchor: middle;
                        stroke: black;
                        stroke-width: ${strokeWidth}px;
                        paint-order: stroke;
                    }
                </style>
                <text x="50%" y="${fontSize + 20}" class="title">${topText.toUpperCase()}</text>
            </svg>
        ` : '';

        const svgBottom = bottomText ? `
            <svg width="${width}" height="${height}">
                <style>
                    .title { 
                        fill: white; 
                        font-size: ${fontSize}px; 
                        font-weight: bold; 
                        font-family: Impact, Arial Black, sans-serif;
                        text-anchor: middle;
                        stroke: black;
                        stroke-width: ${strokeWidth}px;
                        paint-order: stroke;
                    }
                </style>
                <text x="50%" y="${height - 20}" class="title">${bottomText.toUpperCase()}</text>
            </svg>
        ` : '';

        const filename = `./temp/meme_${Date.now()}.jpg`;

        // Create meme with text overlays
        let image = sharp(buffer);

        if (svgTop) {
            image = image.composite([{
                input: Buffer.from(svgTop),
                top: 0,
                left: 0
            }]);
        }

        if (svgBottom) {
            image = image.composite([{
                input: Buffer.from(svgBottom),
                top: 0,
                left: 0
            }]);
        }

        await image.jpeg().toFile(filename);

        const memeMedia = MessageMedia.fromFilePath(filename);
        await client.sendMessage(msg.from, memeMedia, {
            caption: '😂 Meme berhasil dibuat!'
        });

        // Cleanup
        fs.unlinkSync(filename);

    } catch (error) {
        console.error('Meme generator error:', error);
        return msg.reply('❌ Gagal membuat meme. Coba lagi dengan gambar yang berbeda.');
    }
}

module.exports = { memeGenerator };
