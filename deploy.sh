#!/bin/bash

echo "🚀 SMB Tutorials - Quick Deploy to Vercel"
echo "========================================"
echo ""

# Check if vercel is installed
if ! command -v vercel &> /dev/null
then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
    echo "✅ Vercel CLI installed!"
    echo ""
fi

echo "🔨 Deploying your website..."
echo ""

# Deploy
vercel

echo ""
echo "✅ DEPLOYMENT COMPLETE!"
echo ""
echo "📋 Next steps:"
echo "1. Copy the URL shown above"
echo "2. Share it with anyone!"
echo "3. Visit the URL to see your live site"
echo ""
echo "💡 Tip: Run 'vercel --prod' for production deployment"
