#!/bin/bash

echo "╔═══════════════════════════════════════════════════════╗"
echo "║   WhatsApp Bot QR - Setup Script                      ║"
echo "║   Author: dr. Muhammad Sobri Maulana                  ║"
echo "╚═══════════════════════════════════════════════════════╝"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js v14 or higher from https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node -v)
echo "✅ Node.js version: $NODE_VERSION"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed!"
    exit 1
fi

NPM_VERSION=$(npm -v)
echo "✅ npm version: $NPM_VERSION"
echo ""

# Create necessary directories
echo "📁 Creating necessary directories..."
mkdir -p temp
mkdir -p downloads
mkdir -p sessions
echo "✅ Directories created"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
echo "This may take a few minutes..."
npm install
echo ""

# Create .env from example if not exists
if [ ! -f .env ]; then
    echo "📝 Creating .env file from example..."
    cp .env.example .env
    echo "✅ .env file created"
    echo ""
fi

echo "╔═══════════════════════════════════════════════════════╗"
echo "║   ✅ Setup completed successfully!                    ║"
echo "╚═══════════════════════════════════════════════════════╝"
echo ""
echo "🚀 To start the bot, run:"
echo "   npm start"
echo ""
echo "📖 For more information, read README.md"
echo ""
echo "💰 Support the developer:"
echo "   https://lynk.id/muhsobrimaulana"
echo ""
