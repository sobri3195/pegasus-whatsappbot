async function calculator(msg, client) {
    try {
        const expression = msg.body.substring(6).trim();

        if (!expression) {
            return msg.reply('❌ Gunakan: !calc [operasi]\nContoh: !calc 5 + 3 * 2\n\nOperator yang didukung: +, -, *, /, %, ^, sqrt(), sin(), cos(), tan()');
        }

        // Security: Only allow numbers and math operators
        const sanitized = expression.replace(/[^0-9+\-*/().,\s%^sqrtincosg]/gi, '');
        
        if (sanitized !== expression.toLowerCase()) {
            return msg.reply('❌ Karakter tidak valid! Hanya gunakan angka dan operator matematika.');
        }

        let result;
        try {
            // Handle advanced math operations
            let processedExpression = expression
                .replace(/\^/g, '**')  // Power
                .replace(/sqrt\(([^)]+)\)/g, 'Math.sqrt($1)')
                .replace(/sin\(([^)]+)\)/g, 'Math.sin($1)')
                .replace(/cos\(([^)]+)\)/g, 'Math.cos($1)')
                .replace(/tan\(([^)]+)\)/g, 'Math.tan($1)');

            result = eval(processedExpression);

            if (!isFinite(result)) {
                return msg.reply('❌ Hasil tidak valid (infinity atau NaN)');
            }

            const calcText = `
🧮 *KALKULATOR*

📝 *Operasi:* ${expression}
✅ *Hasil:* ${result}

━━━━━━━━━━━━━━━━━━━━
💡 Operator tersedia:
   +, -, *, /, %, ^
   sqrt(), sin(), cos(), tan()
`;

            await msg.reply(calcText);

        } catch (evalError) {
            return msg.reply('❌ Operasi tidak valid! Periksa kembali ekspresi matematika Anda.');
        }

    } catch (error) {
        console.error('Calculator error:', error);
        return msg.reply('❌ Gagal menghitung. Pastikan format operasi benar.');
    }
}

module.exports = { calculator };
