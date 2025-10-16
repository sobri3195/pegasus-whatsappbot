# ❓ Frequently Asked Questions (FAQ)

Kumpulan pertanyaan yang sering ditanyakan tentang WhatsApp Bot QR.

---

## 📱 Umum

### Apa itu WhatsApp Bot QR?
Bot WhatsApp yang menggunakan autentikasi QR Code, tanpa memerlukan WhatsApp Business API. Bot ini berjalan di atas WhatsApp Web.

### Apakah bot ini gratis?
Ya, bot ini 100% gratis dan open source dengan lisensi MIT.

### Apakah aman digunakan?
Ya, bot ini aman. Kode sumbernya terbuka dan dapat diaudit. Bot tidak menyimpan atau mengirim data Anda ke pihak ketiga.

### Apakah bisa digunakan untuk WhatsApp Business?
Ya, bot dapat digunakan dengan akun WhatsApp biasa maupun WhatsApp Business.

### Berapa lama bot bisa berjalan?
Bot dapat berjalan 24/7 selama koneksi internet stabil dan WhatsApp di HP tetap aktif.

---

## 🔧 Instalasi & Setup

### Node.js versi berapa yang didukung?
Minimal Node.js v14.x. Disarankan menggunakan versi LTS terbaru (v18.x atau v20.x).

### Kenapa QR Code tidak muncul?
Kemungkinan:
- Port blocked atau ada firewall
- Puppeteer gagal download Chromium
- Ada bot WhatsApp lain yang berjalan
- Hapus folder `.wwebjs_auth` dan coba lagi

### Bagaimana cara update bot?
```bash
git pull origin main
npm install
npm start
```

### Apakah bisa dijalankan di VPS/Server?
Ya, bot dapat dijalankan di VPS/Server. Pastikan dependencies system terinstall lengkap.

### Apakah bisa dijalankan di Termux?
Ya, tapi performance mungkin terbatas. Install Node.js di Termux dan ikuti langkah instalasi normal.

---

## 🤖 Penggunaan Bot

### Bagaimana cara menggunakan bot?
1. Jalankan bot dengan `npm start`
2. Scan QR Code dengan WhatsApp
3. Kirim pesan `!menu` untuk melihat daftar perintah
4. Gunakan perintah sesuai kebutuhan

### Apakah bot bisa digunakan di grup?
Ya, bot dapat digunakan di chat pribadi maupun grup.

### Kenapa bot tidak respon di grup?
Pastikan:
- Bot sudah menjadi member grup
- Untuk fitur admin, bot harus menjadi admin grup
- Tidak ada typo pada perintah
- Prefix perintah benar (!)

### Bagaimana cara membuat bot hanya respon di grup tertentu?
Edit `index.js` dan tambahkan filter:
```javascript
if (chat.isGroup && chat.id._serialized !== 'GROUP_ID_HERE') {
    return; // Ignore other groups
}
```

### Apakah bisa mengubah prefix perintah?
Ya, edit di file `.env`:
```
BOT_PREFIX=!
```
Ubah `!` dengan prefix yang Anda inginkan (contoh: `/`, `.`, `#`)

---

## 🎯 Fitur Spesifik

### Kenapa download YouTube gagal?
Kemungkinan:
- Video terlalu besar (>64MB)
- Video private atau region-locked
- URL tidak valid
- ytdl-core perlu diupdate

### Bagaimana cara membuat sticker bergerak?
Saat ini bot hanya support sticker static dari gambar. Untuk sticker GIF, akan ditambahkan di versi mendatang.

### Apakah bisa download dari Instagram/TikTok?
Fitur ini akan ditambahkan di update selanjutnya. Saat ini hanya support YouTube.

### Kenapa terjemahan tidak akurat?
Bot menggunakan Google Translate API yang kadang tidak sempurna untuk konteks tertentu.

### Bagaimana cara mengintegrasikan OpenAI GPT?
1. Dapatkan API key dari [OpenAI](https://platform.openai.com/)
2. Tambahkan ke `.env`: `OPENAI_API_KEY=your_key_here`
3. Edit `features/aiChat.js` untuk integrasi GPT

---

## 🔐 Keamanan

### Apakah WhatsApp saya bisa di-ban?
Jika digunakan dengan bijak (tidak spam), risiko ban sangat kecil. Namun, gunakan dengan tanggung jawab Anda sendiri.

### Apakah data chat saya aman?
Ya, semua data tersimpan lokal di komputer Anda. Bot tidak mengirim data ke server eksternal.

### Bagaimana cara backup session?
Session tersimpan di folder `.wwebjs_auth`. Backup folder ini untuk restore session.

### Apakah bot bisa dibaca oleh developer?
Tidak. Developer tidak memiliki akses ke bot Anda atau data chat Anda.

---

## 🐛 Error & Troubleshooting

### Error: "Session closed"
- WhatsApp logout dari HP
- Koneksi internet terputus
- Restart bot dan scan QR lagi

### Error: "Protocol error"
- Puppeteer error
- Restart bot
- Jika masih error, hapus `.wwebjs_auth` dan scan ulang

### Error: "Navigation timeout"
- Koneksi internet lambat
- Increase timeout di puppeteer config

### Error: "Cannot find module"
```bash
rm -rf node_modules
npm install
```

### Bot disconnect terus menerus
- Cek koneksi internet
- Pastikan WhatsApp di HP tidak logout
- Jangan gunakan WhatsApp Web di browser bersamaan
- Update Node.js ke versi terbaru

### File temporary tidak terhapus
Bot auto-cleanup setiap jam. Atau hapus manual:
```bash
rm -rf temp/*
```

---

## 📈 Performa & Optimasi

### Berapa resource yang dibutuhkan?
- RAM: 256-512 MB untuk bot idle
- CPU: Minimal (5-10% saat idle)
- Storage: 200-500 MB

### Bagaimana cara mengurangi penggunaan RAM?
- Disable fitur yang tidak digunakan
- Reduce puppeteer args
- Cleanup temp files lebih sering

### Apakah bisa handle banyak user?
Ya, bot dapat handle multiple users. Tapi hindari broadcast massal untuk menghindari rate limit.

---

## 🔄 Update & Maintenance

### Seberapa sering bot perlu diupdate?
Cek update setiap 1-2 minggu untuk bug fixes dan fitur baru.

### Apakah update akan menghapus session?
Tidak, session tersimpan di folder terpisah dan tidak terpengaruh update.

### Bagaimana cara berkontribusi?
Baca [CONTRIBUTING.md](../CONTRIBUTING.md) untuk panduan kontribusi.

---

## 💰 Donasi & Support

### Bagaimana cara support developer?
- Donasi via: https://lynk.id/muhsobrimaulana
- Star repository di GitHub
- Share ke teman-teman
- Report bugs dan suggest features

### Apakah ada versi premium?
Tidak, semua fitur gratis. Donasi bersifat sukarela untuk support pengembangan.

---

## 📞 Kontak & Community

### Dimana saya bisa bertanya?
- WhatsApp Group: https://chat.whatsapp.com/B8nwRZOBMo64GjTwdXV8Bl
- Telegram: https://t.me/winlin_exploit
- Email: muhammadsobrimaulana31@gmail.com
- GitHub Issues: Untuk bug reports

### Apakah ada tutorial video?
Ya, cek channel YouTube:
https://www.youtube.com/@muhammadsobrimaulana6013

### Bagaimana cara join community?
Join WhatsApp Group: https://chat.whatsapp.com/B8nwRZOBMo64GjTwdXV8Bl

---

## 📚 Lainnya

### Dimana saya bisa belajar lebih lanjut?
- Baca dokumentasi lengkap di [README.md](../README.md)
- Baca kode sumber untuk memahami cara kerja
- Join community untuk diskusi

### Apakah bisa custom untuk bisnis?
Ya, kode bersifat open source dan dapat dikustomisasi. Untuk custom development, hubungi developer.

### Apakah ada layanan hosting bot?
Saat ini belum. Anda perlu host sendiri di VPS atau local machine.

---

**Pertanyaan tidak terjawab?**

Silakan hubungi:
- 📧 muhammadsobrimaulana31@gmail.com
- 💬 https://chat.whatsapp.com/B8nwRZOBMo64GjTwdXV8Bl
- 🐛 https://github.com/sobri3195/whatsapp-bot-qr/issues

---

_Last updated: October 2024_

_Author: dr. Muhammad Sobri Maulana_
