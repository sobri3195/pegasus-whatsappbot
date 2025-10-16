async function quoteGenerator(msg, client) {
    try {
        const quotes = [
            {
                text: "Kesuksesan adalah hasil dari persiapan, kerja keras, dan belajar dari kegagalan.",
                author: "Colin Powell"
            },
            {
                text: "Jangan menunggu. Waktu tidak akan pernah tepat.",
                author: "Napoleon Hill"
            },
            {
                text: "Pendidikan adalah senjata paling ampuh untuk mengubah dunia.",
                author: "Nelson Mandela"
            },
            {
                text: "Masa depan milik mereka yang percaya pada keindahan impian mereka.",
                author: "Eleanor Roosevelt"
            },
            {
                text: "Tidak ada yang tidak mungkin. Kata itu sendiri mengatakan 'Aku mungkin'.",
                author: "Audrey Hepburn"
            },
            {
                text: "Hidup adalah 10% apa yang terjadi padamu dan 90% bagaimana kamu menanggapinya.",
                author: "Charles R. Swindoll"
            },
            {
                text: "Jangan pernah menyerah pada sesuatu yang tidak bisa kamu lewati sehari tanpa memikirkannya.",
                author: "Winston Churchill"
            },
            {
                text: "Keberanian bukan berarti tidak takut. Keberanian berarti tetap bertindak meskipun takut.",
                author: "John Wayne"
            },
            {
                text: "Kegagalan adalah kesempatan untuk memulai lagi dengan lebih cerdas.",
                author: "Henry Ford"
            },
            {
                text: "Bermimpilah seolah kamu akan hidup selamanya. Hiduplah seolah kamu akan mati hari ini.",
                author: "James Dean"
            }
        ];

        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

        const quoteText = `
✨ *QUOTE OF THE DAY* ✨

"${randomQuote.text}"

— ${randomQuote.author}

━━━━━━━━━━━━━━━━━━━━
💪 Keep inspiring! Keep moving forward!
`;

        await msg.reply(quoteText);

    } catch (error) {
        console.error('Quote generator error:', error);
        return msg.reply('❌ Gagal mengambil quote.');
    }
}

module.exports = { quoteGenerator };
