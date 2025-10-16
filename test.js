// Simple test file to verify dependencies
console.log('╔═══════════════════════════════════════════════════════╗');
console.log('║     WhatsApp Bot QR - Dependency Test                ║');
console.log('╚═══════════════════════════════════════════════════════╝\n');

const modules = [
    'whatsapp-web.js',
    'qrcode-terminal',
    'axios',
    'moment-timezone',
    'node-cron',
    'fs-extra',
    'sharp',
    'qrcode'
];

let allPassed = true;

modules.forEach(module => {
    try {
        require.resolve(module);
        console.log(`✅ ${module.padEnd(25)} - OK`);
    } catch (e) {
        console.log(`❌ ${module.padEnd(25)} - MISSING`);
        allPassed = false;
    }
});

console.log('\n' + '═'.repeat(60) + '\n');

if (allPassed) {
    console.log('✅ All dependencies are installed correctly!');
    console.log('🚀 You can now run: npm start\n');
} else {
    console.log('❌ Some dependencies are missing!');
    console.log('📦 Run: npm install\n');
    process.exit(1);
}

// Test Node.js version
const nodeVersion = process.versions.node;
const [major] = nodeVersion.split('.');
console.log(`Node.js version: v${nodeVersion}`);

if (parseInt(major) < 14) {
    console.log('⚠️  Warning: Node.js v14 or higher is recommended');
} else {
    console.log('✅ Node.js version is compatible\n');
}

console.log('═'.repeat(60));
console.log('\n👨‍💻 Author: dr. Muhammad Sobri Maulana');
console.log('📧 Contact: muhammadsobrimaulana31@gmail.com');
console.log('💰 Support: https://lynk.id/muhsobrimaulana\n');
