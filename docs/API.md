# 🔌 API Documentation

Dokumentasi lengkap untuk mengembangkan fitur baru pada WhatsApp Bot.

---

## 📚 Table of Contents

- [Core Functions](#core-functions)
- [Message Handling](#message-handling)
- [Media Processing](#media-processing)
- [External APIs](#external-apis)
- [Creating New Features](#creating-new-features)

---

## 🎯 Core Functions

### Client Initialization

```javascript
const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});
```

### Events

#### QR Code Event
```javascript
client.on('qr', (qr) => {
    // QR Code generated
    qrcode.generate(qr, { small: true });
});
```

#### Ready Event
```javascript
client.on('ready', () => {
    // Bot is ready
    console.log('Bot is ready!');
});
```

#### Message Event
```javascript
client.on('message', async (msg) => {
    // Handle incoming messages
});
```

---

## 💬 Message Handling

### Getting Message Info

```javascript
// Get chat object
const chat = await msg.getChat();

// Get contact info
const contact = await msg.getContact();

// Get message body
const messageBody = msg.body;

// Check if message has media
const hasMedia = msg.hasMedia;

// Get quoted message
const quotedMsg = await msg.getQuotedMessage();

// Get mentions
const mentions = await msg.getMentions();
```

### Sending Messages

#### Text Message
```javascript
await msg.reply('Your message here');
// or
await client.sendMessage(msg.from, 'Your message here');
```

#### Message with Mentions
```javascript
await chat.sendMessage('Hello @user', {
    mentions: [mention]
});
```

#### Media Message
```javascript
const { MessageMedia } = require('whatsapp-web.js');
const media = MessageMedia.fromFilePath('./path/to/file.jpg');

await client.sendMessage(msg.from, media, {
    caption: 'Your caption here'
});
```

#### Sticker
```javascript
await client.sendMessage(msg.from, media, {
    sendMediaAsSticker: true
});
```

#### Voice Message
```javascript
await client.sendMessage(msg.from, audio, {
    sendAudioAsVoice: true
});
```

---

## 🖼️ Media Processing

### Downloading Media

```javascript
if (msg.hasMedia) {
    const media = await msg.downloadMedia();
    
    // Get media data
    const buffer = Buffer.from(media.data, 'base64');
    const mimetype = media.mimetype;
    const filename = media.filename;
}
```

### Image Processing with Sharp

```javascript
const sharp = require('sharp');

// Resize image
await sharp(buffer)
    .resize(512, 512)
    .toFile('output.jpg');

// Apply blur
await sharp(buffer)
    .blur(10)
    .toFile('blurred.jpg');

// Convert to grayscale
await sharp(buffer)
    .grayscale()
    .toFile('grayscale.jpg');

// Add text overlay
const svgText = `
    <svg width="500" height="500">
        <text x="250" y="250" font-size="50" fill="white">
            Your Text
        </text>
    </svg>
`;

await sharp(buffer)
    .composite([{
        input: Buffer.from(svgText),
        top: 0,
        left: 0
    }])
    .toFile('output.jpg');
```

### Creating Stickers

```javascript
// Convert image to WebP for sticker
await sharp(buffer)
    .resize(512, 512, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .webp()
    .toFile('sticker.webp');
```

---

## 🌐 External APIs

### Weather API (Open-Meteo)

```javascript
const axios = require('axios');

// Get coordinates
const geoResponse = await axios.get(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
);

const { latitude, longitude } = geoResponse.data.results[0];

// Get weather
const weatherResponse = await axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
);

const weather = weatherResponse.data.current_weather;
```

### Currency Converter

```javascript
const response = await axios.get(
    `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
);

const rate = response.data.rates[toCurrency];
const result = amount * rate;
```

### Al-Quran API

```javascript
// Get surah
const response = await axios.get(
    `https://api.alquran.cloud/v1/surah/${surahNumber}`
);

// Get specific ayat with translation
const translationResponse = await axios.get(
    `https://api.alquran.cloud/v1/ayah/${surah}:${ayat}/id.indonesian`
);
```

### Prayer Times API

```javascript
const response = await axios.get(
    `https://api.aladhan.com/v1/timings/${timestamp}?latitude=${lat}&longitude=${lon}&method=20`
);

const timings = response.data.data.timings;
```

### URL Shortener

```javascript
// TinyURL
const response = await axios.get(
    `https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`
);

// is.gd
const response = await axios.get(
    `https://is.gd/create.php?format=simple&url=${encodeURIComponent(url)}`
);
```

---

## 🛠️ Creating New Features

### Feature Template

Create a new file in `/features/myFeature.js`:

```javascript
const axios = require('axios');
const { MessageMedia } = require('whatsapp-web.js');

async function myFeature(msg, client) {
    try {
        // 1. Parse command arguments
        const args = msg.body.split(' ').slice(1);
        
        // 2. Validate input
        if (!args[0]) {
            return msg.reply('❌ Usage: !mycommand [argument]');
        }
        
        // 3. Send loading message
        await msg.reply('⏳ Processing...');
        
        // 4. Process data
        // Your logic here
        
        // 5. Send result
        await msg.reply('✅ Success!');
        
    } catch (error) {
        console.error('My feature error:', error);
        return msg.reply('❌ An error occurred.');
    }
}

module.exports = { myFeature };
```

### Register Feature in index.js

```javascript
// Import
const { myFeature } = require('./features/myFeature');

// In message handler
if (command === '!mycommand') {
    await myFeature(msg, client);
}

// Add to menu
const menuText = `
...
!mycommand - Description of my feature
...
`;
```

### Best Practices

1. **Error Handling**
   - Always use try-catch
   - Provide user-friendly error messages
   - Log errors for debugging

2. **Input Validation**
   - Validate all user inputs
   - Check for required parameters
   - Provide usage examples

3. **Loading Messages**
   - Send loading message for long operations
   - Keep user informed about progress

4. **File Management**
   - Save temp files in `/temp` folder
   - Always cleanup after use
   - Check file size limits

5. **Rate Limiting**
   - Implement delays for API calls
   - Handle rate limit errors
   - Queue requests if needed

---

## 🔄 Group Management

### Check if Chat is Group

```javascript
const chat = await msg.getChat();

if (chat.isGroup) {
    // Group-specific logic
}
```

### Get Group Metadata

```javascript
const participants = chat.participants;

// Check if user is admin
const isAdmin = participants.find(
    p => p.id._serialized === userId
)?.isAdmin;
```

### Group Actions

```javascript
// Kick member
await chat.removeParticipants([userId]);

// Promote to admin
await chat.promoteParticipants([userId]);

// Demote from admin
await chat.demoteParticipants([userId]);

// Change group subject
await chat.setSubject('New Group Name');

// Change group description
await chat.setDescription('New Description');
```

---

## 📝 Utilities

### File System Operations

```javascript
const fs = require('fs-extra');

// Ensure directory exists
fs.ensureDirSync('./temp');

// Write file
fs.writeFileSync('./temp/file.txt', 'content');

// Read file
const content = fs.readFileSync('./temp/file.txt', 'utf8');

// Delete file
fs.unlinkSync('./temp/file.txt');

// Empty directory
fs.emptyDirSync('./temp');
```

### Date & Time

```javascript
const moment = require('moment-timezone');

// Current time in timezone
const now = moment().tz('Asia/Jakarta');

// Format date
const formatted = now.format('DD-MM-YYYY HH:mm:ss');
```

### Cron Jobs

```javascript
const cron = require('node-cron');

// Run every hour
cron.schedule('0 * * * *', () => {
    console.log('Running hourly task');
});

// Run every day at midnight
cron.schedule('0 0 * * *', () => {
    console.log('Running daily task');
});
```

---

## 🎨 Message Formatting

### Bold, Italic, Strikethrough

```javascript
await msg.reply('*Bold Text*');
await msg.reply('_Italic Text_');
await msg.reply('~Strikethrough~');
await msg.reply('```Monospace```');
```

### Multi-line Messages

```javascript
const message = `
Line 1
Line 2
Line 3
`;

await msg.reply(message);
```

### Unicode & Emojis

```javascript
const message = '🤖 Bot Message\n✅ Success\n❌ Error';
await msg.reply(message);
```

---

## 🔐 Security Considerations

1. **Sanitize User Input**
   ```javascript
   const sanitized = input.replace(/[^a-zA-Z0-9]/g, '');
   ```

2. **Validate URLs**
   ```javascript
   try {
       new URL(userInput);
   } catch {
       return msg.reply('❌ Invalid URL');
   }
   ```

3. **Limit File Sizes**
   ```javascript
   const MAX_SIZE = 64 * 1024 * 1024; // 64MB
   
   if (fileSize > MAX_SIZE) {
       return msg.reply('❌ File too large');
   }
   ```

4. **Rate Limiting**
   ```javascript
   const userCooldowns = new Map();
   
   if (userCooldowns.has(userId)) {
       return msg.reply('⏳ Please wait...');
   }
   
   userCooldowns.set(userId, Date.now());
   setTimeout(() => userCooldowns.delete(userId), 5000);
   ```

---

## 📞 Support

Need help developing features?

- 📧 Email: muhammadsobrimaulana31@gmail.com
- 💬 WhatsApp: https://chat.whatsapp.com/B8nwRZOBMo64GjTwdXV8Bl
- 📱 Telegram: https://t.me/winlin_exploit

---

**Happy Coding! 🚀**

_Author: dr. Muhammad Sobri Maulana_
