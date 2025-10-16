const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const axios = require('axios');
const moment = require('moment-timezone');
const cron = require('node-cron');
const fs = require('fs-extra');
const gtts = require('node-gtts')('id');
const translate = require('google-translate-api-x');
const sharp = require('sharp');

// Import fitur
const { downloadYoutube } = require('./features/youtube');
const { stickerMaker } = require('./features/sticker');
const { imageEditor } = require('./features/imageEditor');
const { reminderSystem } = require('./features/reminder');
const { groupManager } = require('./features/groupManager');
const { quoteGenerator } = require('./features/quotes');
const { weatherInfo } = require('./features/weather');
const { currencyConverter } = require('./features/currency');
const { aiChat } = require('./features/aiChat');
const { newsUpdates } = require('./features/news');
const { calculator } = require('./features/calculator');
const { textToSpeech } = require('./features/tts');
const { translator } = require('./features/translator');
const { quranVerses } = require('./features/quran');
const { prayerTimes } = require('./features/prayer');
const { memeGenerator } = require('./features/meme');
const { qrGenerator } = require('./features/qrgen');
const { shortUrl } = require('./features/shorturl');
const { factGenerator } = require('./features/facts');
const { gameSystem } = require('./features/games');

console.log('╔═══════════════════════════════════════════════════════╗');
console.log('║     WhatsApp Bot QR Code - 20 Fitur Lengkap          ║');
console.log('║                                                       ║');
console.log('║  Author: Lettu Kes dr. Muhammad Sobri Maulana        ║');
console.log('║          S.Kom, CEH, OSCP, OSCE                       ║');
console.log('║                                                       ║');
console.log('║  GitHub: github.com/sobri3195                         ║');
console.log('║  Email: muhammadsobrimaulana31@gmail.com             ║');
console.log('║                                                       ║');
console.log('║  Support: https://lynk.id/muhsobrimaulana            ║');
console.log('╚═══════════════════════════════════════════════════════╝');

// Inisialisasi client
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-accelerated-2d-canvas',
            '--no-first-run',
            '--no-zygote',
            '--disable-gpu'
        ]
    }
});

// QR Code event
client.on('qr', (qr) => {
    console.log('\n🔐 Scan QR Code di bawah ini dengan WhatsApp Anda:\n');
    qrcode.generate(qr, { small: true });
    console.log('\n📱 Buka WhatsApp > Perangkat Tertaut > Tautkan Perangkat\n');
});

// Ready event
client.on('ready', () => {
    console.log('\n✅ Bot WhatsApp sudah aktif dan siap digunakan!\n');
    console.log('📋 Ketik !menu untuk melihat daftar perintah\n');
});

// Authenticated event
client.on('authenticated', () => {
    console.log('✅ Autentikasi berhasil!');
});

// Auth failure event
client.on('auth_failure', (msg) => {
    console.error('❌ Autentikasi gagal:', msg);
});

// Disconnected event
client.on('disconnected', (reason) => {
    console.log('❌ Bot terputus:', reason);
});

// Message handler
client.on('message', async (msg) => {
    try {
        const chat = await msg.getChat();
        const contact = await msg.getContact();
        const command = msg.body.toLowerCase();

        // Log pesan
        console.log(`📩 ${contact.pushname}: ${msg.body}`);

        // Menu utama
        if (command === '!menu' || command === '!help') {
            const menuText = `
╔═══════════════════════════════════════╗
║   🤖 WHATSAPP BOT - MENU LENGKAP      ║
╚═══════════════════════════════════════╝

*📱 MEDIA & DOWNLOAD*
1. !yt [url] - Download video YouTube
2. !sticker - Buat sticker dari gambar
3. !tts [teks] - Text to Speech

*🎨 EDITOR & KREATOR*
4. !blur - Blur gambar
5. !grayscale - Gambar hitam putih
6. !meme [atas|bawah] - Buat meme
7. !qr [teks] - Generate QR Code

*🌍 INFORMASI & UTILITAS*
8. !cuaca [kota] - Info cuaca
9. !kurs [jumlah] [dari] [ke] - Konversi mata uang
10. !news - Berita terbaru Indonesia
11. !fakta - Fakta random menarik
12. !shorturl [url] - Perpendek URL

*🧮 TOOLS & KALKULATOR*
13. !calc [operasi] - Kalkulator
14. !translate [kode] [teks] - Terjemahkan teks

*🕌 ISLAMI*
15. !quran [nomor] - Ayat Al-Quran random
16. !jadwalsholat [kota] - Jadwal sholat
17. !doa - Doa-doa harian

*💬 AI & CHAT*
18. !ai [pertanyaan] - Chat dengan AI
19. !quote - Quote inspiratif

*🎮 GAME & HIBURAN*
20. !tebak - Game tebak kata
21. !suit [pilihan] - Main suit (batu/kertas/gunting)

*👥 GROUP MANAGEMENT*
!tagall - Tag semua member
!kick @user - Kick member (admin)
!promote @user - Jadikan admin (admin)
!demote @user - Copot admin (admin)

*⚙️ LAINNYA*
!ping - Cek status bot
!info - Info bot & author
!donate - Donasi & support

═══════════════════════════════════════

👨‍💻 *Author:* Lettu Kes dr. Muhammad Sobri Maulana
    S.Kom, CEH, OSCP, OSCE

📧 *Contact:* muhammadsobrimaulana31@gmail.com
🔗 *GitHub:* github.com/sobri3195

💰 *Support Developer:*
https://lynk.id/muhsobrimaulana

🎥 *YouTube:* https://youtube.com/@muhammadsobrimaulana6013
📱 *Telegram:* https://t.me/winlin_exploit
🎵 *TikTok:* https://tiktok.com/@dr.sobri

👥 *Join Group:*
https://chat.whatsapp.com/B8nwRZOBMo64GjTwdXV8Bl
`;
            await msg.reply(menuText);
        }

        // Fitur 1: YouTube Downloader
        else if (command.startsWith('!yt ')) {
            await downloadYoutube(msg, client);
        }

        // Fitur 2: Sticker Maker
        else if (command === '!sticker') {
            await stickerMaker(msg, client);
        }

        // Fitur 3: Text to Speech
        else if (command.startsWith('!tts ')) {
            await textToSpeech(msg, client);
        }

        // Fitur 4-5: Image Editor
        else if (command === '!blur' || command === '!grayscale') {
            await imageEditor(msg, client, command.replace('!', ''));
        }

        // Fitur 6: Meme Generator
        else if (command.startsWith('!meme ')) {
            await memeGenerator(msg, client);
        }

        // Fitur 7: QR Generator
        else if (command.startsWith('!qr ')) {
            await qrGenerator(msg, client);
        }

        // Fitur 8: Weather Info
        else if (command.startsWith('!cuaca ')) {
            await weatherInfo(msg, client);
        }

        // Fitur 9: Currency Converter
        else if (command.startsWith('!kurs ')) {
            await currencyConverter(msg, client);
        }

        // Fitur 10: News Updates
        else if (command === '!news') {
            await newsUpdates(msg, client);
        }

        // Fitur 11: Random Facts
        else if (command === '!fakta') {
            await factGenerator(msg, client);
        }

        // Fitur 12: URL Shortener
        else if (command.startsWith('!shorturl ')) {
            await shortUrl(msg, client);
        }

        // Fitur 13: Calculator
        else if (command.startsWith('!calc ')) {
            await calculator(msg, client);
        }

        // Fitur 14: Translator
        else if (command.startsWith('!translate ')) {
            await translator(msg, client);
        }

        // Fitur 15: Quran Verses
        else if (command.startsWith('!quran')) {
            await quranVerses(msg, client);
        }

        // Fitur 16: Prayer Times
        else if (command.startsWith('!jadwalsholat ')) {
            await prayerTimes(msg, client);
        }

        // Fitur 17: Islamic Doa
        else if (command === '!doa') {
            const doas = [
                '*Doa Sebelum Makan:*\nاَللّٰهُمَّ بَارِكْ لَنَا فِيْمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ\n_Allahumma baarik lanaa fiimaa razaqtanaa wa qinaa adzaa bannar_\nArtinya: Ya Allah, berkahilah kami dalam rezeki yang telah Engkau berikan kepada kami dan peliharalah kami dari siksa api neraka',
                '*Doa Setelah Makan:*\nاَلْحَمْدُ ِللهِ الَّذِىْ اَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِيْنَ\n_Alhamdu lillahil ladzii ath\'amanaa wa saqoonaa wa ja\'alanaa muslimiin_\nArtinya: Segala puji bagi Allah yang telah memberi makan dan minum kepada kami serta menjadikan kami orang-orang muslim',
                '*Doa Keluar Rumah:*\nبِسْمِ اللهِ تَوَكَّلْتُ عَلَى اللهِ لاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللهِ\n_Bismillahi tawakkaltu \'alallahi laa hawla wa laa quwwata illa billah_\nArtinya: Dengan menyebut nama Allah, aku berserah diri kepada Allah, tidak ada daya dan kekuatan kecuali dengan pertolongan Allah'
            ];
            const randomDoa = doas[Math.floor(Math.random() * doas.length)];
            await msg.reply(randomDoa);
        }

        // Fitur 18: AI Chat
        else if (command.startsWith('!ai ')) {
            await aiChat(msg, client);
        }

        // Fitur 19: Quote Generator
        else if (command === '!quote') {
            await quoteGenerator(msg, client);
        }

        // Fitur 20-21: Games
        else if (command === '!tebak' || command.startsWith('!suit ')) {
            await gameSystem(msg, client);
        }

        // Group Management
        else if (command === '!tagall') {
            await groupManager(msg, client, 'tagall');
        }
        else if (command.startsWith('!kick ')) {
            await groupManager(msg, client, 'kick');
        }
        else if (command.startsWith('!promote ')) {
            await groupManager(msg, client, 'promote');
        }
        else if (command.startsWith('!demote ')) {
            await groupManager(msg, client, 'demote');
        }

        // Info & Status
        else if (command === '!ping') {
            const start = Date.now();
            const sent = await msg.reply('Pong! 🏓');
            const end = Date.now();
            await sent.edit(`🏓 Pong!\n⚡ Response time: ${end - start}ms`);
        }

        else if (command === '!info') {
            const info = `
╔═══════════════════════════════════════╗
║       🤖 BOT INFORMATION              ║
╚═══════════════════════════════════════╝

*📱 Bot Name:* WhatsApp Bot QR Code
*🔧 Version:* 2.0.0
*⚡ Status:* Active & Running

*👨‍💻 Developer Information:*
━━━━━━━━━━━━━━━━━━━━━━━
*Nama:* Lettu Kes dr. Muhammad Sobri Maulana
*Gelar:* S.Kom, CEH, OSCP, OSCE
*GitHub:* github.com/sobri3195
*Email:* muhammadsobrimaulana31@gmail.com

*🌐 Social Media:*
━━━━━━━━━━━━━━━━━━━━━━━
🎥 YouTube: youtube.com/@muhammadsobrimaulana6013
📱 Telegram: t.me/winlin_exploit
🎵 TikTok: tiktok.com/@dr.sobri

*👥 Community:*
━━━━━━━━━━━━━━━━━━━━━━━
WhatsApp Group:
https://chat.whatsapp.com/B8nwRZOBMo64GjTwdXV8Bl

*💰 Support Development:*
━━━━━━━━━━━━━━━━━━━━━━━
Donasi: https://lynk.id/muhsobrimaulana

Ketik *!menu* untuk melihat semua fitur!
`;
            await msg.reply(info);
        }

        else if (command === '!donate') {
            const donateMsg = `
╔═══════════════════════════════════════╗
║      💰 SUPPORT DEVELOPER             ║
╚═══════════════════════════════════════╝

Terima kasih telah menggunakan bot ini! 🙏

Jika bot ini bermanfaat, Anda dapat mendukung pengembangan lebih lanjut melalui:

*💳 Donasi:*
https://lynk.id/muhsobrimaulana

Dukungan Anda sangat berarti untuk pengembangan fitur-fitur baru! ❤️

━━━━━━━━━━━━━━━━━━━━━━━

*👨‍💻 Developer:*
Lettu Kes dr. Muhammad Sobri Maulana
S.Kom, CEH, OSCP, OSCE

📧 muhammadsobrimaulana31@gmail.com
🔗 github.com/sobri3195

Terima kasih atas dukungannya! 🙏
`;
            await msg.reply(donateMsg);
        }

    } catch (error) {
        console.error('Error handling message:', error);
        await msg.reply('❌ Maaf, terjadi kesalahan. Silakan coba lagi.');
    }
});

// Initialize bot
client.initialize();

// Ensure directories exist
fs.ensureDirSync('./temp');
fs.ensureDirSync('./downloads');
fs.ensureDirSync('./sessions');

// Cleanup temp files every hour
cron.schedule('0 * * * *', () => {
    console.log('🧹 Cleaning up temporary files...');
    fs.emptyDirSync('./temp');
});
