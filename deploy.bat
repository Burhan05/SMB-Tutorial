@echo off
echo.
echo 🚀 SMB Tutorials - Quick Deploy to Vercel
echo ========================================
echo.

REM Check if vercel is installed
where vercel >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo 📦 Installing Vercel CLI...
    call npm install -g vercel
    echo ✅ Vercel CLI installed!
    echo.
)

echo 🔨 Deploying your website...
echo.

REM Deploy
call vercel

echo.
echo ✅ DEPLOYMENT COMPLETE!
echo.
echo 📋 Next steps:
echo 1. Copy the URL shown above
echo 2. Share it with anyone!
echo 3. Visit the URL to see your live site
echo.
echo 💡 Tip: Run 'vercel --prod' for production deployment
echo.
pause
