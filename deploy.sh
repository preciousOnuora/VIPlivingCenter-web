#!/bin/bash

# VIP Living Centers Website Deployment Script
echo "🚀 Starting deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Install backend dependencies
echo "🔧 Installing backend dependencies..."
cd backend
npm install
cd ..

# Build the project
echo "🏗️ Building project..."
npm run build

# Check if build was successful
if [ ! -d "build" ]; then
    echo "❌ Build failed! build directory not found."
    exit 1
fi

echo "✅ Build completed successfully!"

# Deploy to GitHub Pages (if gh-pages is available)
if command -v npx &> /dev/null; then
    echo "🚀 Deploying to GitHub Pages..."
    npx gh-pages -d build
    echo "✅ Deployment completed!"
else
    echo "⚠️  gh-pages not available. Build is ready in the 'build' directory."
    echo "📁 You can manually upload the 'build' folder to your hosting service."
fi

echo "🎉 Deployment process completed!"
echo "📁 Your built files are in the 'build' directory"
echo "🌐 Ready for production deployment!" 