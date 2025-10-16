async function factGenerator(msg, client) {
    try {
        const facts = [
            {
                title: "💻 Teknologi",
                fact: "Bug komputer pertama adalah seekor ngengat sungguhan yang ditemukan di komputer Mark II Harvard tahun 1947. Sejak saat itu istilah 'debugging' populer digunakan."
            },
            {
                title: "🌐 Internet",
                fact: "Email pertama dikirim pada tahun 1971 oleh Ray Tomlinson. Dia juga yang memperkenalkan simbol @ dalam alamat email."
            },
            {
                title: "🔐 Keamanan",
                fact: "Password 'password' masih menjadi salah satu password paling populer yang digunakan, meskipun sangat tidak aman!"
            },
            {
                title: "📱 WhatsApp",
                fact: "WhatsApp mengirim lebih dari 100 miliar pesan setiap harinya, menjadikannya salah satu platform messaging terbesar di dunia."
            },
            {
                title: "🤖 AI",
                fact: "Istilah 'Artificial Intelligence' pertama kali digunakan pada konferensi Dartmouth tahun 1956 oleh John McCarthy."
            },
            {
                title: "💾 Penyimpanan",
                fact: "Hard disk pertama IBM tahun 1956 berkapasitas 5MB dengan berat 1 ton. Sekarang, microSD card seberat beberapa gram bisa menyimpan 1TB data!"
            },
            {
                title: "🐍 Python",
                fact: "Bahasa pemrograman Python dinamai dari grup komedi Inggris 'Monty Python', bukan dari ular python."
            },
            {
                title: "🎮 Game",
                fact: "Game 'Pong' yang dirilis tahun 1972 adalah salah satu video game komersial pertama yang sukses dan memulai industri video game modern."
            },
            {
                title: "☕ Java",
                fact: "Bahasa pemrograman Java awalnya bernama 'Oak' dan dinamai dari pohon oak di luar kantor pendirinya. Kemudian diubah menjadi Java yang terinspirasi dari kopi Java."
            },
            {
                title: "🖱️ Mouse",
                fact: "Mouse komputer pertama dibuat dari kayu pada tahun 1964 oleh Doug Engelbart di Stanford Research Institute."
            }
        ];

        const randomFact = facts[Math.floor(Math.random() * facts.length)];

        const factText = `
💡 *FAKTA MENARIK*

${randomFact.title}

${randomFact.fact}

━━━━━━━━━━━━━━━━━━━━
🎯 Ketik !fakta untuk fakta lainnya!
`;

        await msg.reply(factText);

    } catch (error) {
        console.error('Facts generator error:', error);
        return msg.reply('❌ Gagal mengambil fakta menarik.');
    }
}

module.exports = { factGenerator };
