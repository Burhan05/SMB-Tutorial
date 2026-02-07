# SMB Tutorials - One Student, One Teacher

A modern web application connecting students with expert teachers for hourly tutoring sessions.

# SMB Tutorials - One Student, One Teacher

A modern web application connecting students with expert teachers for hourly tutoring sessions.

## 🚀 Quick Start for CodeSandbox

### Upload Method (Recommended)
1. Go to https://codesandbox.io/
2. Click "Create Sandbox" or "Import Project"
3. Choose "Upload Folder" or drag & drop the entire `smb-tutorials-package` folder
4. CodeSandbox will automatically detect it's a React app
5. Wait for dependencies to install (this may take 1-2 minutes)
6. The site will start with full styling! ✨

### Important: Wait for Installation
- CodeSandbox needs to install Tailwind CSS and other packages
- You'll see "Installing dependencies..." at the top
- Once complete, you'll see all the colors and styling!
- If styles still don't show, click the refresh button in the preview window

### Troubleshooting in CodeSandbox

**Problem:** No colors/styling showing
**Solution:** 
1. Make sure ALL files are uploaded (especially `tailwind.config.js`, `postcss.config.js`, `src/index.css`)
2. Wait for "Installing dependencies" to complete
3. Check the "Console" tab for any errors
4. Try clicking the refresh button in preview
5. Try "File" → "Restart Sandbox"

**Problem:** "Module not found: tailwindcss"
**Solution:** CodeSandbox should auto-install. If not, it will show an "Install" button - click it!

**Problem:** Blank white screen
**Solution:** Open browser DevTools (F12) and check Console for errors


## 📁 Folder Structure

```
smb-tutorials-package/
├── package.json              # Dependencies (includes Tailwind!)
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
├── public/
│   └── index.html           # HTML template
├── src/
│   ├── App.js               # Main application
│   ├── index.js             # React entry point
│   └── index.css            # Tailwind imports
└── README.md                # This file
```

**⚠️ IMPORTANT:** All files must be uploaded for Tailwind to work properly!

## ✨ Features Included

### Student Features:
- **Home Page** - Clean landing page with hero section
- **Find Teachers** - Multi-step form to search for teachers
- **Teacher Listings** - Browse active teachers with filters
- **Book & Pay** - Booking flow with payment gateway (demo)
- **Request Teacher** - Request inactive teachers
- **Custom Subject** - Request subjects not in the list
- **Sign In/Sign Up** - Authentication pages with Google login option

### Teacher Features:
- **Tutor Signup** - Application form for teachers to join
- **Tutor Recruitment** - Professional section on homepage

### All Pages:
1. Home
2. Sign In
3. Sign Up
4. Student Form
5. Teachers List
6. Teacher Request (Inactive)
7. Notify Teacher
8. Custom Subject Request
9. Payment Gateway
10. Tutor Signup

## 🎨 Design Features

- ✅ Pastel teal/cyan/blue color scheme
- ✅ Clean, modern UI inspired by Preply
- ✅ Fully responsive design
- ✅ Smooth animations
- ✅ Professional typography
- ✅ All styling via Tailwind CSS (CDN)

## 🔧 Technical Details

- **Framework:** React 18
- **Styling:** Tailwind CSS 3.3.0 (properly configured with PostCSS)
- **State Management:** React useState hooks
- **Build Tool:** React Scripts (Create React App)
- **All dependencies in package.json** - CodeSandbox auto-installs!

## 📝 Important Notes

### Tailwind CSS Setup
The project uses **proper Tailwind CSS configuration** (not CDN):
- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS/Autoprefixer setup  
- `src/index.css` - Tailwind directives (@tailwind base, etc.)
- **All files required for styling to work!**

### Mock Data
- Teachers data is hardcoded (pseudo data)
- Payment is demo only (shows alert)
- All form submissions show alerts
- Ready to connect to real backend

### To Connect Real Data
Edit `src/App.js` and replace:
- `teachersData` array (line ~32-93) with API call
- `inactiveTeachersData` in request page with API call
- Form submission handlers with actual API endpoints

## 🚀 Deployment Options

### Deploy to Netlify
1. Run `npm run build` in your local environment
2. Drag the `build` folder to https://app.netlify.com/drop
3. Get your live URL!

### Deploy to Vercel
1. Push to GitHub
2. Connect to Vercel (https://vercel.com)
3. Auto-deploys!

### Deploy to GitHub Pages
1. Add to `package.json`: `"homepage": "https://yourusername.github.io/smb-tutorials"`
2. Install: `npm install --save gh-pages`
3. Add scripts: `"predeploy": "npm run build"`, `"deploy": "gh-pages -d build"`
4. Run: `npm run deploy`

## 🎯 User Flows

### Student Journey:
Home → Find Teacher → Fill Form → Browse Teachers → Book → Pay

### Alternative Student Paths:
- Request inactive teacher → Notify them
- Request custom subject → Fill custom form

### Teacher Journey:
Home → Scroll to bottom → Become a Tutor → Fill Application → Submit

## 📱 Responsive Design

Works perfectly on:
- Desktop (1920px+)
- Laptop (1024px+)
- Tablet (768px+)
- Mobile (375px+)

## 💡 Tips for CodeSandbox

1. **If styles don't load:** Refresh the preview window
2. **If app doesn't start:** Check the "Problems" tab
3. **To see console logs:** Open browser DevTools
4. **To share:** Click "Share" button → Get URL

## 🆘 Troubleshooting

**Problem:** Site shows no styling
**Solution:** Make sure `public/index.html` has the Tailwind CDN link

**Problem:** Site shows blank page
**Solution:** Check browser console for errors. Likely a syntax error in App.js

**Problem:** "Module not found" error
**Solution:** Make sure all files are in correct folders (src/ and public/)

## 📧 Support

For questions about the code:
1. Check this README
2. Review comments in `src/App.js`
3. Check React documentation: https://react.dev

---

**Built with ❤️ for SMB Tutorials**

Ready to upload to CodeSandbox! 🚀
