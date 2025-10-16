# 📦 Panduan Instalasi WhatsApp Bot QR

Panduan lengkap instalasi WhatsApp Bot untuk berbagai sistem operasi.

---

## 📋 Persyaratan Sistem

### Minimum Requirements
- **Node.js:** v14.x atau lebih tinggi
- **RAM:** 512 MB (minimum), 1 GB (recommended)
- **Storage:** 500 MB free space
- **OS:** Windows 10+, Ubuntu 18.04+, macOS 10.14+
- **Internet:** Koneksi stabil minimal 1 Mbps

### Software Requirements
- Node.js dan NPM
- Git
- WhatsApp aktif di smartphone

---

## 🖥️ Instalasi di Windows

### 1. Install Node.js
1. Download Node.js dari [nodejs.org](https://nodejs.org/)
2. Pilih versi LTS (Long Term Support)
3. Install dengan double-click file installer
4. Verify instalasi:
```cmd
node --version
npm --version
```

### 2. Install Git
1. Download Git dari [git-scm.com](https://git-scm.com/)
2. Install dengan settingan default
3. Verify instalasi:
```cmd
git --version
```

### 3. Clone Repository
```cmd
git clone https://github.com/sobri3195/whatsapp-bot-qr.git
cd whatsapp-bot-qr
```

### 4. Install Dependencies
```cmd
npm install
```

### 5. Jalankan Bot
```cmd
npm start
```

### 6. Scan QR Code
- Buka WhatsApp di HP
- Settings > Linked Devices > Link a Device
- Scan QR Code yang muncul di Command Prompt

---

## 🐧 Instalasi di Linux (Ubuntu/Debian)

### 1. Update System
```bash
sudo apt update
sudo apt upgrade -y
```

### 2. Install Node.js
```bash
# Install Node.js 18.x
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Verify
node --version
npm --version
```

### 3. Install Dependencies System
```bash
# Dependencies untuk Puppeteer
sudo apt install -y \
    gconf-service \
    libasound2 \
    libatk1.0-0 \
    libc6 \
    libcairo2 \
    libcups2 \
    libdbus-1-3 \
    libexpat1 \
    libfontconfig1 \
    libgcc1 \
    libgconf-2-4 \
    libgdk-pixbuf2.0-0 \
    libglib2.0-0 \
    libgtk-3-0 \
    libnspr4 \
    libpango-1.0-0 \
    libpangocairo-1.0-0 \
    libstdc++6 \
    libx11-6 \
    libx11-xcb1 \
    libxcb1 \
    libxcomposite1 \
    libxcursor1 \
    libxdamage1 \
    libxext6 \
    libxfixes3 \
    libxi6 \
    libxrandr2 \
    libxrender1 \
    libxss1 \
    libxtst6 \
    ca-certificates \
    fonts-liberation \
    libappindicator1 \
    libnss3 \
    lsb-release \
    xdg-utils \
    wget
```

### 4. Install Git
```bash
sudo apt install -y git
```

### 5. Clone Repository
```bash
git clone https://github.com/sobri3195/whatsapp-bot-qr.git
cd whatsapp-bot-qr
```

### 6. Install Dependencies
```bash
npm install
```

### 7. Jalankan Bot
```bash
npm start
```

### 8. Scan QR Code
QR Code akan muncul di terminal. Scan dengan WhatsApp.

---

## 🍎 Instalasi di macOS

### 1. Install Homebrew
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### 2. Install Node.js
```bash
brew install node
node --version
npm --version
```

### 3. Install Git
```bash
brew install git
```

### 4. Clone Repository
```bash
git clone https://github.com/sobri3195/whatsapp-bot-qr.git
cd whatsapp-bot-qr
```

### 5. Install Dependencies
```bash
npm install
```

### 6. Jalankan Bot
```bash
npm start
```

### 7. Scan QR Code
QR Code akan muncul di terminal. Scan dengan WhatsApp.

---

## 🐳 Instalasi dengan Docker (Coming Soon)

```bash
# Build Docker image
docker build -t whatsapp-bot .

# Run container
docker run -d --name wa-bot whatsapp-bot

# View logs
docker logs -f wa-bot
```

---

## 🔧 Troubleshooting

### Error: Cannot find module
```bash
# Hapus node_modules dan install ulang
rm -rf node_modules package-lock.json
npm install
```

### Error: Puppeteer Chrome download failed
```bash
# Set environment variable
export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=false
npm install puppeteer --force
```

### QR Code tidak muncul
```bash
# Hapus session lama
rm -rf .wwebjs_auth .wwebjs_cache
npm start
```

### Bot disconnect terus
- Cek koneksi internet
- Jangan logout WhatsApp dari HP
- Pastikan HP tidak mati atau offline

### Error: ENOSPC (Linux)
```bash
# Increase file watchers limit
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

---

## 🚀 Menjalankan Bot Sebagai Service

### Linux (systemd)

1. Buat file service:
```bash
sudo nano /etc/systemd/system/whatsapp-bot.service
```

2. Isi dengan:
```ini
[Unit]
Description=WhatsApp Bot Service
After=network.target

[Service]
Type=simple
User=YOUR_USERNAME
WorkingDirectory=/path/to/whatsapp-bot-qr
ExecStart=/usr/bin/node index.js
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

3. Enable dan start service:
```bash
sudo systemctl enable whatsapp-bot
sudo systemctl start whatsapp-bot
sudo systemctl status whatsapp-bot
```

### Windows (NSSM)

1. Download NSSM dari [nssm.cc](https://nssm.cc/download)
2. Install bot sebagai service:
```cmd
nssm install WhatsAppBot "C:\Program Files\nodejs\node.exe" "C:\path\to\whatsapp-bot-qr\index.js"
nssm start WhatsAppBot
```

---

## 🔄 Update Bot

```bash
# Navigate ke folder bot
cd whatsapp-bot-qr

# Pull latest changes
git pull origin main

# Install new dependencies
npm install

# Restart bot
npm start
```

---

## 📞 Butuh Bantuan?

- 📧 Email: muhammadsobrimaulana31@gmail.com
- 💬 WhatsApp Group: https://chat.whatsapp.com/B8nwRZOBMo64GjTwdXV8Bl
- 📱 Telegram: https://t.me/winlin_exploit
- 🐛 GitHub Issues: https://github.com/sobri3195/whatsapp-bot-qr/issues

---

**Good luck! 🚀**

_Made with ❤️ by dr. Muhammad Sobri Maulana_
