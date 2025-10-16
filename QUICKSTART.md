# 🚀 Quick Start Guide

Panduan cepat untuk menjalankan WhatsApp Bot dalam 5 menit!

---

## ⚡ Quick Setup (Linux/Mac)

```bash
# 1. Clone repository
git clone https://github.com/sobri3195/whatsapp-bot-qr.git
cd whatsapp-bot-qr

# 2. Run setup script
chmod +x setup.sh
./setup.sh

# 3. Start bot
npm start

# 4. Scan QR Code with WhatsApp
```

---

## 🪟 Quick Setup (Windows)

```cmd
# 1. Clone repository
git clone https://github.com/sobri3195/whatsapp-bot-qr.git
cd whatsapp-bot-qr

# 2. Install dependencies
npm install

# 3. Create directories
mkdir temp downloads sessions

# 4. Start bot
npm start

# 5. Scan QR Code with WhatsApp
```

---

## 📱 Scan QR Code

1. **Start bot** with `npm start`
2. **Wait** for QR Code to appear in terminal
3. **Open WhatsApp** on your phone
4. Go to **Settings** > **Linked Devices**
5. Tap **Link a Device**
6. **Scan** the QR Code
7. **Done!** Bot is now connected

---

## ✅ First Commands

Try these commands to test your bot:

```
!menu       # Show all commands
!ping       # Check bot status
!info       # Bot information
!quote      # Get inspirational quote
!fakta      # Get random tech fact
```

---

## 🎯 Popular Features

### Download YouTube Video
```
!yt https://youtube.com/watch?v=xxxxx
```

### Make Sticker
```
Send an image with caption: !sticker
```

### Weather Info
```
!cuaca Jakarta
```

### Currency Converter
```
!kurs 100 USD IDR
```

### Calculator
```
!calc 5 + 3 * 2
```

### Translate Text
```
!translate en Halo, apa kabar?
```

### Al-Quran
```
!quran 2 255
```

### Prayer Times
```
!jadwalsholat Jakarta
```

### Generate QR Code
```
!qr https://github.com/sobri3195
```

### Play Game
```
!tebak
!suit batu
```

---

## 🔧 Troubleshooting

### QR Code doesn't appear?
```bash
# Remove old session
rm -rf .wwebjs_auth .wwebjs_cache
npm start
```

### Bot disconnects?
- Check internet connection
- Don't logout WhatsApp from phone
- Bot will auto-reconnect

### Commands don't work?
- Make sure to use `!` prefix
- Check if command is typed correctly
- Try `!menu` to see all commands

---

## 📚 Next Steps

1. **Read full documentation**: [README.md](README.md)
2. **See all commands**: [COMMANDS.md](docs/COMMANDS.md)
3. **Installation guide**: [INSTALL.md](INSTALL.md)
4. **FAQ**: [FAQ.md](docs/FAQ.md)
5. **Join community**: [WhatsApp Group](https://chat.whatsapp.com/B8nwRZOBMo64GjTwdXV8Bl)

---

## 💡 Tips

- **Keep bot running**: Use PM2 or systemd service
- **Backup session**: Copy `.wwebjs_auth` folder
- **Update regularly**: `git pull && npm install`
- **Report bugs**: Create GitHub issue
- **Request features**: Join community group

---

## 🆘 Need Help?

- 📧 **Email**: muhammadsobrimaulana31@gmail.com
- 💬 **WhatsApp Group**: https://chat.whatsapp.com/B8nwRZOBMo64GjTwdXV8Bl
- 📱 **Telegram**: https://t.me/winlin_exploit
- 🐛 **GitHub Issues**: https://github.com/sobri3195/whatsapp-bot-qr/issues

---

## 💰 Support Developer

If you find this bot useful, consider supporting:

**Donation**: https://lynk.id/muhsobrimaulana

Your support helps maintain and improve this project! ❤️

---

## 🌟 Show Your Support

Give a ⭐ on GitHub if you like this project!

**GitHub**: https://github.com/sobri3195/whatsapp-bot-qr

---

<div align="center">

**Made with ❤️ by dr. Muhammad Sobri Maulana**

**S.Kom, CEH, OSCP, OSCE**

</div>
