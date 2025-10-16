# 🤖 WhatsApp Bot dengan QR Code - 20+ Fitur Lengkap

<div align="center">

![WhatsApp Bot](https://img.shields.io/badge/WhatsApp-Bot-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**WhatsApp Bot dengan autentikasi QR Code tanpa memerlukan WhatsApp Business API**

[Fitur](#-fitur-lengkap) • [Instalasi](#-instalasi) • [Penggunaan](#-cara-menggunakan) • [Author](#-author) • [Donasi](#-support--donasi)

</div>

---

## 📋 Deskripsi

Bot WhatsApp ini dikembangkan menggunakan **whatsapp-web.js** yang memungkinkan Anda menjalankan bot WhatsApp tanpa memerlukan WhatsApp Business API. Bot ini dilengkapi dengan **20+ fitur lengkap** untuk berbagai keperluan mulai dari media processing, informasi, utilitas, hingga entertainment.

### ✨ Keunggulan

- ✅ **Tanpa API Key WhatsApp Business** - Cukup scan QR Code
- ✅ **20+ Fitur Lengkap** - Download video, sticker maker, AI chat, dan banyak lagi
- ✅ **Mudah Digunakan** - Setup cepat dan sederhana
- ✅ **Open Source** - Gratis dan dapat dikustomisasi
- ✅ **Multifungsi** - Media, informasi, tools, islami, games, dan group management
- ✅ **Auto Reconnect** - Bot otomatis reconnect jika terputus

---

## 🎯 Fitur Lengkap

### 📱 Media & Download
1. **!yt [url]** - Download video dari YouTube
2. **!sticker** - Membuat sticker dari gambar
3. **!tts [teks]** - Text to Speech (mengubah teks menjadi audio)

### 🎨 Editor & Kreator
4. **!blur** - Memberikan efek blur pada gambar
5. **!grayscale** - Mengubah gambar menjadi hitam putih
6. **!meme [atas|bawah]** - Membuat meme dengan teks custom
7. **!qr [teks]** - Generate QR Code dari teks atau URL

### 🌍 Informasi & Utilitas
8. **!cuaca [kota]** - Mendapatkan informasi cuaca real-time
9. **!kurs [jumlah] [dari] [ke]** - Konversi mata uang
10. **!news** - Berita teknologi terbaru Indonesia
11. **!fakta** - Fakta random menarik seputar teknologi
12. **!shorturl [url]** - Memperpendek URL

### 🧮 Tools & Kalkulator
13. **!calc [operasi]** - Kalkulator matematika (mendukung operasi kompleks)
14. **!translate [kode] [teks]** - Menerjemahkan teks ke berbagai bahasa

### 🕌 Fitur Islami
15. **!quran [nomor surah] [nomor ayat]** - Mendapatkan ayat Al-Quran dengan terjemahan
16. **!jadwalsholat [kota]** - Jadwal sholat untuk kota tertentu
17. **!doa** - Kumpulan doa-doa harian

### 💬 AI & Chat
18. **!ai [pertanyaan]** - Chat dengan AI (dapat diintegrasikan dengan GPT)
19. **!quote** - Quote inspiratif random

### 🎮 Game & Hiburan
20. **!tebak** - Game tebak kata
21. **!suit [pilihan]** - Main suit (batu/kertas/gunting)

### 👥 Group Management
- **!tagall** - Mention semua member grup
- **!kick @user** - Kick member dari grup (hanya admin)
- **!promote @user** - Jadikan member sebagai admin (hanya admin)
- **!demote @user** - Copot admin (hanya admin)

### ⚙️ Lainnya
- **!ping** - Cek status dan response time bot
- **!menu / !help** - Menampilkan daftar semua perintah
- **!info** - Informasi tentang bot dan developer
- **!donate** - Informasi donasi untuk support developer

---

## 🚀 Instalasi

### Persyaratan Sistem

- Node.js versi 14.x atau lebih tinggi
- NPM atau Yarn
- Koneksi internet yang stabil
- WhatsApp aktif di smartphone

### Langkah Instalasi

1. **Clone repository**
```bash
git clone https://github.com/sobri3195/whatsapp-bot-qr.git
cd whatsapp-bot-qr
```

2. **Install dependencies**
```bash
npm install
```

3. **Jalankan bot**
```bash
npm start
```

4. **Scan QR Code**
   - Buka WhatsApp di smartphone Anda
   - Pergi ke **Settings** > **Linked Devices** > **Link a Device**
   - Scan QR Code yang muncul di terminal

5. **Bot siap digunakan!** ✅

---

## 💻 Cara Menggunakan

### Menjalankan Bot

#### Mode Production
```bash
npm start
```

#### Mode Development (dengan auto-restart)
```bash
npm run dev
```

### Contoh Penggunaan Fitur

#### Download Video YouTube
```
!yt https://youtube.com/watch?v=xxxxx
```

#### Membuat Sticker
```
Kirim gambar dengan caption: !sticker
Atau reply gambar dengan: !sticker
```

#### Cek Cuaca
```
!cuaca Jakarta
```

#### Konversi Mata Uang
```
!kurs 100 USD IDR
```

#### Membuat QR Code
```
!qr https://github.com/sobri3195
```

#### Text to Speech
```
!tts Halo, apa kabar?
```

#### Terjemahkan Teks
```
!translate en Halo, apa kabar?
```

#### Jadwal Sholat
```
!jadwalsholat Jakarta
```

#### Main Game
```
!tebak
!suit batu
```

---

## 📁 Struktur Project

```
whatsapp-bot-qr/
├── index.js              # File utama bot
├── package.json          # Dependencies dan scripts
├── features/             # Folder berisi semua fitur
│   ├── youtube.js        # Download YouTube
│   ├── sticker.js        # Sticker maker
│   ├── imageEditor.js    # Image editing
│   ├── tts.js           # Text to speech
│   ├── weather.js       # Info cuaca
│   ├── currency.js      # Konversi mata uang
│   ├── calculator.js    # Kalkulator
│   ├── translator.js    # Translator
│   ├── quran.js         # Ayat Al-Quran
│   ├── prayer.js        # Jadwal sholat
│   ├── meme.js          # Meme generator
│   ├── qrgen.js         # QR Code generator
│   ├── shorturl.js      # URL shortener
│   ├── quotes.js        # Quote generator
│   ├── facts.js         # Fakta menarik
│   ├── news.js          # Berita
│   ├── aiChat.js        # AI Chat
│   ├── games.js         # Game system
│   ├── groupManager.js  # Group management
│   └── reminder.js      # Reminder system
├── temp/                # Folder temporary files
├── downloads/           # Folder downloads
└── README.md           # Dokumentasi
```

---

## 🛠️ Teknologi yang Digunakan

- **[whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js)** - Library WhatsApp Web API
- **[Node.js](https://nodejs.org/)** - Runtime environment
- **[Puppeteer](https://pptr.dev/)** - Headless Chrome untuk WhatsApp Web
- **[Sharp](https://sharp.pixelplumbing.com/)** - Image processing
- **[Axios](https://axios-http.com/)** - HTTP client untuk API calls
- **[qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal)** - Generate QR Code di terminal
- **[ytdl-core](https://github.com/fent/node-ytdl-core)** - YouTube video downloader
- **[node-gtts](https://www.npmjs.com/package/node-gtts)** - Text to Speech
- **[google-translate-api-x](https://www.npmjs.com/package/google-translate-api-x)** - Google Translate
- **[moment-timezone](https://momentjs.com/timezone/)** - Time zone management
- **[node-cron](https://www.npmjs.com/package/node-cron)** - Task scheduler

---

## 🔧 Kustomisasi

### Menambah Fitur Baru

1. Buat file baru di folder `features/`, misalnya `myFeature.js`
2. Export fungsi dari file tersebut:
```javascript
async function myFeature(msg, client) {
    // Your code here
}
module.exports = { myFeature };
```

3. Import dan gunakan di `index.js`:
```javascript
const { myFeature } = require('./features/myFeature');

// Di dalam message handler
if (command === '!mycommand') {
    await myFeature(msg, client);
}
```

### Integrasi API Tambahan

Bot ini mendukung integrasi dengan berbagai API:
- **OpenAI GPT** - Untuk AI chat yang lebih advanced
- **NewsAPI** - Untuk berita real-time
- **Spotify API** - Download musik
- **Instagram API** - Download foto/video Instagram
- Dan masih banyak lagi!

---

## 🐛 Troubleshooting

### QR Code tidak muncul
- Pastikan tidak ada bot WhatsApp lain yang berjalan
- Hapus folder `.wwebjs_auth` dan coba lagi
- Pastikan Node.js versi 14.x atau lebih tinggi

### Bot tiba-tiba disconnect
- Cek koneksi internet
- Jangan logout WhatsApp dari smartphone
- Bot akan auto-reconnect dalam beberapa detik

### Error saat download media
- Pastikan folder `temp` dan `downloads` sudah dibuat
- Cek ukuran file (WhatsApp limit 64MB)

### Perintah tidak berfungsi di grup
- Pastikan bot sudah menjadi member grup
- Untuk perintah admin, bot harus menjadi admin grup

---

## 👨‍💻 Author

<div align="center">

### **Lettu Kes dr. Muhammad Sobri Maulana**
**S.Kom, CEH, OSCP, OSCE**

[![GitHub](https://img.shields.io/badge/GitHub-sobri3195-181717?style=for-the-badge&logo=github)](https://github.com/sobri3195)
[![Email](https://img.shields.io/badge/Email-muhammadsobrimaulana31%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:muhammadsobrimaulana31@gmail.com)

---

### 🌐 Social Media

[![YouTube](https://img.shields.io/badge/YouTube-Muhammad_Sobri_Maulana-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@muhammadsobrimaulana6013)
[![Telegram](https://img.shields.io/badge/Telegram-winlin__exploit-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/winlin_exploit)
[![TikTok](https://img.shields.io/badge/TikTok-dr.sobri-000000?style=for-the-badge&logo=tiktok&logoColor=white)](https://www.tiktok.com/@dr.sobri)

---

### 👥 Join Community

[![WhatsApp Group](https://img.shields.io/badge/WhatsApp-Join_Group-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://chat.whatsapp.com/B8nwRZOBMo64GjTwdXV8Bl)

</div>

---

## 💰 Support & Donasi

Jika bot ini bermanfaat untuk Anda, dukung pengembangan lebih lanjut dengan donasi:

<div align="center">

[![Donasi](https://img.shields.io/badge/Donasi-lynk.id%2Fmuhsobrimaulana-00D632?style=for-the-badge&logo=cash-app&logoColor=white)](https://lynk.id/muhsobrimaulana)

**Scan QR Code untuk Donasi:**

[https://lynk.id/muhsobrimaulana](https://lynk.id/muhsobrimaulana)

</div>

Dukungan Anda sangat berarti untuk:
- ✅ Pengembangan fitur-fitur baru
- ✅ Maintenance dan bug fixes
- ✅ Pembuatan tutorial dan dokumentasi
- ✅ Server hosting untuk testing

---

## 📝 Lisensi

Project ini menggunakan **MIT License** - lihat file [LICENSE](LICENSE) untuk detail.

```
MIT License

Copyright (c) 2024 dr. Muhammad Sobri Maulana

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🙏 Credits & Acknowledgments

- **[whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js)** - WhatsApp Web API
- **Al-Quran API** - [api.alquran.cloud](https://api.alquran.cloud)
- **Prayer Times API** - [Aladhan API](https://aladhan.com/prayer-times-api)
- **Weather API** - [Open-Meteo](https://open-meteo.com)
- **Currency API** - [ExchangeRate-API](https://www.exchangerate-api.com)
- Semua contributor dan supporter project ini

---

## ⚠️ Disclaimer

Bot ini dibuat untuk tujuan **edukasi dan pengembangan**. Pengguna bertanggung jawab penuh atas penggunaan bot ini. Pastikan untuk:

- ✅ Mematuhi [Terms of Service WhatsApp](https://www.whatsapp.com/legal/terms-of-service)
- ✅ Tidak melakukan spam atau broadcast massal
- ✅ Menggunakan untuk tujuan yang legal dan etis
- ✅ Menghormati privasi pengguna lain

Developer tidak bertanggung jawab atas penyalahgunaan bot ini.

---

## 📞 Kontak & Support

Jika Anda memiliki pertanyaan, saran, atau menemukan bug:

- 📧 **Email:** muhammadsobrimaulana31@gmail.com
- 💬 **WhatsApp Group:** [Join Disini](https://chat.whatsapp.com/B8nwRZOBMo64GjTwdXV8Bl)
- 🐛 **Issues:** [GitHub Issues](https://github.com/sobri3195/whatsapp-bot-qr/issues)
- 📱 **Telegram:** [@winlin_exploit](https://t.me/winlin_exploit)

---

## 🌟 Star History

Jika project ini bermanfaat, jangan lupa berikan ⭐ di GitHub!

<div align="center">

[![Star on GitHub](https://img.shields.io/github/stars/sobri3195/whatsapp-bot-qr?style=social)](https://github.com/sobri3195/whatsapp-bot-qr)

**Made with ❤️ by dr. Muhammad Sobri Maulana**

</div>

---

## 📈 Roadmap & Future Features

### 🔜 Coming Soon
- [ ] Dashboard web untuk monitoring bot
- [ ] Multi-device support
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Advanced AI chat dengan GPT-4
- [ ] Voice message recognition
- [ ] Instagram/TikTok downloader
- [ ] Spotify music downloader
- [ ] Auto reply dan chatbot training
- [ ] Scheduled messages
- [ ] Analytics dan statistics

### 💡 Request Fitur?
Silakan buat **[Issue](https://github.com/sobri3195/whatsapp-bot-qr/issues)** atau hubungi developer!

---

<div align="center">

**⚡ Powered by Node.js & whatsapp-web.js**

**🚀 Version 2.0.0**

© 2024 dr. Muhammad Sobri Maulana. All Rights Reserved.

</div>
