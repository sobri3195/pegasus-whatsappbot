const ytdl = require('ytdl-core');
const fs = require('fs-extra');
const { MessageMedia } = require('whatsapp-web.js');

async function downloadYoutube(msg, client) {
    try {
        const url = msg.body.split(' ')[1];
        
        if (!url) {
            return msg.reply('❌ Gunakan: !yt [URL YouTube]\nContoh: !yt https://youtube.com/watch?v=xxxxx');
        }

        if (!ytdl.validateURL(url)) {
            return msg.reply('❌ URL YouTube tidak valid!');
        }

        await msg.reply('⏳ Mengunduh video... Mohon tunggu...');

        const info = await ytdl.getInfo(url);
        const title = info.videoDetails.title;
        const filename = `./temp/${Date.now()}.mp4`;

        // Download video dengan kualitas terbaik yang tersedia
        ytdl(url, { 
            quality: 'lowest',
            filter: 'audioandvideo'
        })
        .pipe(fs.createWriteStream(filename))
        .on('finish', async () => {
            try {
                // Cek ukuran file (max 64MB untuk WhatsApp)
                const stats = fs.statSync(filename);
                if (stats.size > 64000000) {
                    await msg.reply('❌ File terlalu besar (max 64MB). Coba video yang lebih pendek.');
                    fs.unlinkSync(filename);
                    return;
                }

                const media = MessageMedia.fromFilePath(filename);
                await client.sendMessage(msg.from, media, {
                    caption: `🎥 *${title}*\n\n_Downloaded by WhatsApp Bot_`
                });

                // Cleanup
                fs.unlinkSync(filename);
            } catch (error) {
                console.error('Error sending video:', error);
                await msg.reply('❌ Gagal mengirim video. File mungkin terlalu besar.');
                if (fs.existsSync(filename)) fs.unlinkSync(filename);
            }
        })
        .on('error', (error) => {
            console.error('Download error:', error);
            msg.reply('❌ Gagal mengunduh video. Coba lagi nanti.');
            if (fs.existsSync(filename)) fs.unlinkSync(filename);
        });

    } catch (error) {
        console.error('YouTube download error:', error);
        return msg.reply('❌ Terjadi kesalahan saat mengunduh video.');
    }
}

module.exports = { downloadYoutube };
