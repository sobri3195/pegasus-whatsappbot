async function groupManager(msg, client, action) {
    try {
        const chat = await msg.getChat();

        if (!chat.isGroup) {
            return msg.reply('❌ Perintah ini hanya bisa digunakan di grup!');
        }

        const sender = msg.author || msg.from;
        const groupMetadata = await chat.participants;
        const botNumber = (await client.info.wid._serialized);
        
        // Check if sender is admin
        const senderParticipant = groupMetadata.find(p => p.id._serialized === sender);
        const isAdmin = senderParticipant && senderParticipant.isAdmin;

        if (action === 'tagall') {
            if (!isAdmin) {
                return msg.reply('❌ Hanya admin yang bisa menggunakan perintah ini!');
            }

            let text = '👥 *TAG ALL MEMBERS*\n\n';
            let mentions = [];

            for (let participant of groupMetadata) {
                mentions.push(participant.id._serialized);
                text += `@${participant.id.user} `;
            }

            await chat.sendMessage(text, { mentions });
        }

        else if (action === 'kick') {
            if (!isAdmin) {
                return msg.reply('❌ Hanya admin yang bisa menggunakan perintah ini!');
            }

            const mentionedIds = await msg.getMentions();
            if (mentionedIds.length === 0) {
                return msg.reply('❌ Tag user yang ingin di-kick!\nContoh: !kick @user');
            }

            for (let user of mentionedIds) {
                await chat.removeParticipants([user.id._serialized]);
            }

            await msg.reply('✅ User berhasil di-kick dari grup.');
        }

        else if (action === 'promote') {
            if (!isAdmin) {
                return msg.reply('❌ Hanya admin yang bisa menggunakan perintah ini!');
            }

            const mentionedIds = await msg.getMentions();
            if (mentionedIds.length === 0) {
                return msg.reply('❌ Tag user yang ingin dijadikan admin!\nContoh: !promote @user');
            }

            for (let user of mentionedIds) {
                await chat.promoteParticipants([user.id._serialized]);
            }

            await msg.reply('✅ User berhasil dijadikan admin.');
        }

        else if (action === 'demote') {
            if (!isAdmin) {
                return msg.reply('❌ Hanya admin yang bisa menggunakan perintah ini!');
            }

            const mentionedIds = await msg.getMentions();
            if (mentionedIds.length === 0) {
                return msg.reply('❌ Tag admin yang ingin dicopot!\nContoh: !demote @user');
            }

            for (let user of mentionedIds) {
                await chat.demoteParticipants([user.id._serialized]);
            }

            await msg.reply('✅ Admin berhasil dicopot.');
        }

    } catch (error) {
        console.error('Group manager error:', error);
        return msg.reply('❌ Terjadi kesalahan. Pastikan bot adalah admin grup.');
    }
}

module.exports = { groupManager };
