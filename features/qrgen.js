const QRCode = require('qrcode');
const { MessageMedia } = require('whatsapp-web.js');
const fs = require('fs-extra');

async function qrGenerator(msg, client) {
    try {
        const text = msg.body.substring(4).trim();

        if (!text) {
            return msg.reply('❌ Gunakan: !qr [teks atau URL]\nContoh: !qr https://github.com/sobri3195');
        }

        if (text.length > 500) {
            return msg.reply('❌ Teks terlalu panjang! Maksimal 500 karakter.');
        }

        await msg.reply('⏳ Membuat QR Code...');

        const filename = `./temp/qr_${Date.now()}.png`;

        // Generate QR code
        await QRCode.toFile(filename, text, {
            errorCorrectionLevel: 'H',
            type: 'png',
            quality: 0.95,
            margin: 1,
            color: {
                dark: '#000000',
                light: '#FFFFFF'
            },
            width: 512
        });

        const media = MessageMedia.fromFilePath(filename);
        await client.sendMessage(msg.from, media, {
            caption: `✅ QR Code berhasil dibuat!\n\n📝 *Content:* ${text.substring(0, 100)}${text.length > 100 ? '...' : ''}`
        });

        // Cleanup
        fs.unlinkSync(filename);

    } catch (error) {
        console.error('QR generator error:', error);
        return msg.reply('❌ Gagal membuat QR Code.');
    }
}

module.exports = { qrGenerator };
