# 📋 Daftar Perintah Bot

Dokumentasi lengkap semua perintah yang tersedia di WhatsApp Bot.

---

## 🎯 Quick Reference

| Kategori | Perintah |
|----------|----------|
| [Info](#-info--help) | `!menu`, `!help`, `!info`, `!ping` |
| [Media](#-media--download) | `!yt`, `!sticker`, `!tts` |
| [Editor](#-image-editor) | `!blur`, `!grayscale`, `!meme` |
| [Utilitas](#-utilitas) | `!qr`, `!shorturl`, `!calc`, `!translate` |
| [Informasi](#-informasi) | `!cuaca`, `!kurs`, `!news`, `!fakta` |
| [Islami](#-islami) | `!quran`, `!jadwalsholat`, `!doa` |
| [AI](#-ai--chat) | `!ai`, `!quote` |
| [Game](#-game) | `!tebak`, `!suit` |
| [Grup](#-group-management) | `!tagall`, `!kick`, `!promote`, `!demote` |

---

## 📖 Info & Help

### !menu atau !help
Menampilkan daftar semua perintah yang tersedia.

**Usage:**
```
!menu
!help
```

**Output:**
```
╔═══════════════════════════════════════╗
║   🤖 WHATSAPP BOT - MENU LENGKAP      ║
╚═══════════════════════════════════════╝
...
```

---

### !info
Menampilkan informasi tentang bot dan developer.

**Usage:**
```
!info
```

**Output:**
- Nama bot dan versi
- Informasi developer
- Contact dan social media
- Link community

---

### !ping
Mengecek status bot dan response time.

**Usage:**
```
!ping
```

**Output:**
```
🏓 Pong!
⚡ Response time: 125ms
```

---

### !donate
Menampilkan informasi donasi untuk support developer.

**Usage:**
```
!donate
```

---

## 📱 Media & Download

### !yt [url]
Download video dari YouTube.

**Usage:**
```
!yt https://youtube.com/watch?v=xxxxx
```

**Parameter:**
- `url` - URL video YouTube

**Notes:**
- Maksimal ukuran file 64MB (limit WhatsApp)
- Video akan di-convert ke format MP4
- Gunakan video yang pendek untuk hasil terbaik

**Example:**
```
!yt https://youtube.com/watch?v=dQw4w9WgXcQ
```

---

### !sticker
Membuat sticker dari gambar.

**Usage:**
```
Kirim gambar dengan caption: !sticker
Atau reply gambar dengan: !sticker
```

**Notes:**
- Hanya support gambar (JPG, PNG)
- Gambar akan di-resize ke 512x512
- Format output: WebP

**Example:**
1. Kirim gambar
2. Tambahkan caption `!sticker`
3. Atau reply gambar dengan `!sticker`

---

### !tts [teks]
Text to Speech - mengubah teks menjadi audio.

**Usage:**
```
!tts [teks yang ingin diucapkan]
```

**Parameter:**
- `teks` - Teks yang akan diubah menjadi audio (max 200 karakter)

**Notes:**
- Bahasa: Indonesia
- Format audio: MP3
- Dikirim sebagai voice message

**Example:**
```
!tts Halo, selamat pagi!
!tts Terima kasih telah menggunakan bot ini
```

---

## 🎨 Image Editor

### !blur
Memberikan efek blur pada gambar.

**Usage:**
```
Kirim gambar dengan caption: !blur
Atau reply gambar dengan: !blur
```

**Notes:**
- Blur level: 10 (default)
- Format output: JPEG

---

### !grayscale
Mengubah gambar menjadi hitam putih.

**Usage:**
```
Kirim gambar dengan caption: !grayscale
Atau reply gambar dengan: !grayscale
```

**Notes:**
- Grayscale full
- Format output: JPEG

---

### !meme [teks atas|teks bawah]
Membuat meme dengan teks custom.

**Usage:**
```
!meme [teks atas|teks bawah]
```

**Parameter:**
- `teks atas` - Teks di bagian atas gambar
- `teks bawah` - Teks di bagian bawah gambar
- Pisahkan dengan `|` (pipe)

**Notes:**
- Kirim gambar dengan caption atau reply gambar
- Font: Impact Bold
- Warna: Putih dengan outline hitam

**Example:**
```
!meme Saat deadline besok|Tapi masih santai
!meme One does not simply|Create a WhatsApp bot
```

---

## 🔧 Utilitas

### !qr [teks]
Generate QR Code dari teks atau URL.

**Usage:**
```
!qr [teks atau URL]
```

**Parameter:**
- `teks` - Teks atau URL yang akan di-encode ke QR Code (max 500 karakter)

**Example:**
```
!qr https://github.com/sobri3195
!qr Ini adalah teks untuk QR Code
!qr +628123456789
```

---

### !shorturl [url]
Memperpendek URL panjang.

**Usage:**
```
!shorturl [URL]
```

**Parameter:**
- `url` - URL yang ingin diperpendek (harus valid HTTP/HTTPS)

**Notes:**
- Menggunakan TinyURL atau is.gd API
- URL hasil permanent

**Example:**
```
!shorturl https://github.com/sobri3195/whatsapp-bot-qr
```

---

### !calc [operasi]
Kalkulator matematika.

**Usage:**
```
!calc [operasi matematika]
```

**Operator yang didukung:**
- `+` - Penjumlahan
- `-` - Pengurangan
- `*` - Perkalian
- `/` - Pembagian
- `%` - Modulus
- `^` - Pangkat
- `sqrt()` - Akar kuadrat
- `sin()`, `cos()`, `tan()` - Trigonometri

**Example:**
```
!calc 5 + 3
!calc 10 * 2 - 5
!calc sqrt(16)
!calc 2^8
!calc sin(90)
```

---

### !translate [kode bahasa] [teks]
Menerjemahkan teks ke berbagai bahasa.

**Usage:**
```
!translate [kode] [teks]
```

**Parameter:**
- `kode` - Kode bahasa tujuan
- `teks` - Teks yang akan diterjemahkan (max 500 karakter)

**Kode Bahasa:**
- `en` - English
- `id` - Indonesia
- `ar` - Arabic
- `ja` - Japanese
- `ko` - Korean
- `zh` - Chinese
- `es` - Spanish
- `fr` - French
- `de` - German

**Example:**
```
!translate en Halo, apa kabar?
!translate ar Good morning
!translate ja Terima kasih
```

---

## 🌍 Informasi

### !cuaca [kota]
Mendapatkan informasi cuaca real-time.

**Usage:**
```
!cuaca [nama kota]
```

**Parameter:**
- `kota` - Nama kota (Indonesia atau international)

**Informasi yang ditampilkan:**
- Suhu saat ini
- Kondisi cuaca
- Kecepatan angin
- Arah angin

**Example:**
```
!cuaca Jakarta
!cuaca Surabaya
!cuaca New York
```

---

### !kurs [jumlah] [dari] [ke]
Konversi mata uang.

**Usage:**
```
!kurs [jumlah] [dari] [ke]
```

**Parameter:**
- `jumlah` - Jumlah uang
- `dari` - Kode mata uang asal
- `ke` - Kode mata uang tujuan

**Mata Uang Populer:**
- `USD` - US Dollar
- `IDR` - Indonesian Rupiah
- `EUR` - Euro
- `GBP` - British Pound
- `JPY` - Japanese Yen
- `SGD` - Singapore Dollar
- `MYR` - Malaysian Ringgit

**Example:**
```
!kurs 100 USD IDR
!kurs 1000000 IDR USD
!kurs 50 EUR GBP
```

---

### !news
Mendapatkan berita teknologi terbaru.

**Usage:**
```
!news
```

**Output:**
- 3-5 berita teknologi terkini
- Sumber berita
- Ringkasan singkat

---

### !fakta
Mendapatkan fakta menarik random seputar teknologi.

**Usage:**
```
!fakta
```

**Output:**
- Fakta random tentang teknologi, programming, atau sejarah komputer

---

## 🕌 Islami

### !quran [nomor surah] [nomor ayat]
Mendapatkan ayat Al-Quran dengan terjemahan Indonesia.

**Usage:**
```
!quran [nomor surah] [nomor ayat]
!quran [nomor surah]
!quran
```

**Parameter:**
- `nomor surah` - Nomor surah (1-114), opsional
- `nomor ayat` - Nomor ayat, opsional

**Notes:**
- Jika tidak ada parameter, akan random
- Tampil dalam bahasa Arab dan terjemahan Indonesia

**Example:**
```
!quran 2 255
!quran 1
!quran
```

---

### !jadwalsholat [kota]
Mendapatkan jadwal sholat untuk kota tertentu.

**Usage:**
```
!jadwalsholat [nama kota]
```

**Parameter:**
- `kota` - Nama kota

**Informasi yang ditampilkan:**
- Waktu Subuh
- Waktu Terbit
- Waktu Dzuhur
- Waktu Ashar
- Waktu Maghrib
- Waktu Isya
- Tanggal Hijriyah

**Example:**
```
!jadwalsholat Jakarta
!jadwalsholat Bandung
!jadwalsholat Makkah
```

---

### !doa
Mendapatkan doa-doa harian random.

**Usage:**
```
!doa
```

**Output:**
- Doa dalam bahasa Arab
- Transliterasi Latin
- Terjemahan Indonesia

**Doa yang tersedia:**
- Doa sebelum makan
- Doa setelah makan
- Doa keluar rumah
- Dan lainnya

---

## 🤖 AI & Chat

### !ai [pertanyaan]
Chat dengan AI.

**Usage:**
```
!ai [pertanyaan Anda]
```

**Parameter:**
- `pertanyaan` - Pertanyaan atau statement

**Notes:**
- AI sederhana (dapat diintegrasikan dengan OpenAI GPT)
- Respon berdasarkan predefined answers

**Example:**
```
!ai Halo
!ai Siapa kamu?
!ai Apa itu artificial intelligence?
```

---

### !quote
Mendapatkan quote inspiratif random.

**Usage:**
```
!quote
```

**Output:**
- Quote inspiratif
- Nama author
- Design menarik

---

## 🎮 Game

### !tebak
Game tebak kata.

**Usage:**
```
!tebak
```

**Cara bermain:**
1. Ketik `!tebak` untuk mulai
2. Bot akan memberikan huruf acak
3. Susun huruf menjadi kata yang benar
4. Ada hint untuk membantu
5. Waktu: 60 detik

**Example:**
```
!tebak
> Bot: Susun huruf: MRKTEOPU
> Bot: Hint: Alat elektronik untuk mengolah data
> You: komputer
> Bot: Benar! 🎉
```

---

### !suit [pilihan]
Main suit (batu/kertas/gunting).

**Usage:**
```
!suit [batu/kertas/gunting]
```

**Parameter:**
- `pilihan` - Pilih salah satu: batu, kertas, atau gunting

**Rules:**
- Batu mengalahkan Gunting
- Gunting mengalahkan Kertas
- Kertas mengalahkan Batu

**Example:**
```
!suit batu
!suit kertas
!suit gunting
```

---

## 👥 Group Management

### !tagall
Mention semua member grup.

**Usage:**
```
!tagall
```

**Requirements:**
- Hanya bisa di grup
- User harus admin grup

**Notes:**
- Akan mention semua member grup
- Gunakan dengan bijak (jangan spam)

---

### !kick @user
Kick member dari grup.

**Usage:**
```
!kick @username
```

**Requirements:**
- Hanya bisa di grup
- User harus admin grup
- Bot harus admin grup

**Example:**
```
!kick @John
```

---

### !promote @user
Jadikan member sebagai admin.

**Usage:**
```
!promote @username
```

**Requirements:**
- Hanya bisa di grup
- User harus admin grup
- Bot harus admin grup

**Example:**
```
!promote @Jane
```

---

### !demote @user
Copot admin menjadi member biasa.

**Usage:**
```
!demote @username
```

**Requirements:**
- Hanya bisa di grup
- User harus admin grup
- Bot harus admin grup

**Example:**
```
!demote @Bob
```

---

## ⚠️ Notes & Tips

### General Tips
1. Semua perintah menggunakan prefix `!`
2. Perintah tidak case-sensitive
3. Untuk media (gambar), bisa kirim dengan caption atau reply
4. Jika error, coba ulang atau hubungi admin

### Group Usage
1. Bot harus jadi member grup untuk berfungsi
2. Fitur admin memerlukan bot sebagai admin
3. Jangan spam perintah untuk menghindari rate limit

### Media Limits
1. Maksimal ukuran file: 64MB (limit WhatsApp)
2. Video YouTube: pilih yang durasi pendek
3. Gambar: format JPG, PNG, WebP

### Rate Limiting
1. Jangan spam perintah terlalu cepat
2. Tunggu proses selesai sebelum perintah baru
3. Untuk download, tunggu minimal 5 detik antar request

---

## 📞 Butuh Bantuan?

Jika ada perintah yang tidak berfungsi atau ada pertanyaan:

- 📧 Email: muhammadsobrimaulana31@gmail.com
- 💬 WhatsApp Group: https://chat.whatsapp.com/B8nwRZOBMo64GjTwdXV8Bl
- 📱 Telegram: https://t.me/winlin_exploit
- 🐛 GitHub Issues: https://github.com/sobri3195/whatsapp-bot-qr/issues

---

**Happy Using! 🎉**

_Author: dr. Muhammad Sobri Maulana_

_Last updated: October 2024_
