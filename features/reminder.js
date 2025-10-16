const cron = require('node-cron');
const fs = require('fs-extra');

const reminders = new Map();

async function reminderSystem(msg, client, action) {
    try {
        if (action === 'set') {
            // Format: !reminder set [waktu dalam menit] [pesan]
            const parts = msg.body.split(' ');
            if (parts.length < 4) {
                return msg.reply('❌ Format: !reminder set [menit] [pesan]\nContoh: !reminder set 30 Meeting dengan client');
            }

            const minutes = parseInt(parts[2]);
            const message = parts.slice(3).join(' ');

            if (isNaN(minutes) || minutes < 1) {
                return msg.reply('❌ Waktu harus berupa angka (dalam menit)');
            }

            const reminderId = Date.now();
            const reminderTime = new Date(Date.now() + minutes * 60000);

            setTimeout(async () => {
                await client.sendMessage(msg.from, `⏰ *REMINDER*\n\n${message}`);
                reminders.delete(reminderId);
            }, minutes * 60000);

            reminders.set(reminderId, {
                time: reminderTime,
                message: message,
                chatId: msg.from
            });

            await msg.reply(`✅ Reminder diset untuk ${minutes} menit dari sekarang\n⏰ ${reminderTime.toLocaleString('id-ID')}`);
        }

    } catch (error) {
        console.error('Reminder error:', error);
        return msg.reply('❌ Gagal membuat reminder.');
    }
}

module.exports = { reminderSystem };
