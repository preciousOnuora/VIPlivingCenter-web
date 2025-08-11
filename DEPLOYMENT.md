# 🚀 Deployment Guide

This guide covers deploying your VIP Living Centers website to various hosting platforms.

## 📋 Prerequisites

- ✅ Code is committed to GitHub
- ✅ Environment variables are configured
- ✅ Dependencies are installed
- ✅ Build process works locally

## 🌐 GitHub Pages Deployment

### Automatic Deployment
1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for production deployment"
   git push origin main
   ```

2. **Deploy using npm script**
   ```bash
   npm run deploy
   ```

3. **Configure GitHub Pages**
   - Go to your repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)

### Manual Deployment
1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload build folder**
   - Upload the `build` folder contents to your hosting service
   - Ensure all files are in the root directory

## ☁️ Vercel Deployment

### Frontend Only
1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow prompts**
   - Link to existing project or create new
   - Set build command: `npm run build`
   - Set output directory: `build`

### Full Stack (Frontend + Backend)
1. **Create vercel.json**
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "package.json",
         "use": "@vercel/static-build",
         "config": { "distDir": "build" }
       },
       {
         "src": "backend/server.js",
         "use": "@vercel/node"
       }
     ],
     "routes": [
       {
         "src": "/api/(.*)",
         "dest": "backend/server.js"
       },
       {
         "src": "/(.*)",
         "dest": "/index.html"
       }
     ]
   }
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

## 🐘 Heroku Deployment

### Backend Only
1. **Install Heroku CLI**
   ```bash
   # macOS
   brew tap heroku/brew && brew install heroku
   
   # Windows
   # Download from https://devcenter.heroku.com/articles/heroku-cli
   ```

2. **Login to Heroku**
   ```bash
   heroku login
   ```

3. **Create Heroku app**
   ```bash
   heroku create your-app-name
   ```

4. **Set environment variables**
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set EMAIL_HOST=smtp.gmail.com
   heroku config:set EMAIL_PORT=587
   heroku config:set EMAIL_USER=your-email@gmail.com
   heroku config:set EMAIL_PASS=your-app-password
   ```

5. **Deploy**
   ```bash
   git subtree push --prefix=backend heroku main
   ```

### Frontend + Backend
1. **Create separate apps**
   ```bash
   heroku create your-frontend-app
   heroku create your-backend-app
   ```

2. **Deploy backend**
   ```bash
   cd backend
   heroku git:remote -a your-backend-app
   git push heroku main
   ```

3. **Update frontend config**
   ```javascript
   // src/config.js
   apiBaseUrl: 'https://your-backend-app.herokuapp.com/api'
   ```

4. **Deploy frontend**
   ```bash
   npm run build
   # Upload build folder to your frontend hosting
   ```

## 🔧 Netlify Deployment

### Frontend Only
1. **Drag & Drop**
   - Build: `npm run build`
   - Drag `build` folder to Netlify

### Git Integration
1. **Connect GitHub repository**
2. **Build settings**
   - Build command: `npm run build`
   - Publish directory: `build`
3. **Deploy automatically on push**

## 📱 Mobile App Deployment

### React Native (Future)
1. **Install React Native CLI**
   ```bash
   npm install -g react-native-cli
   ```

2. **Build for platforms**
   ```bash
   # iOS
   npx react-native run-ios
   
   # Android
   npx react-native run-android
   ```

## 🔒 SSL & Domain Setup

### Custom Domain
1. **Add domain to hosting service**
2. **Configure DNS records**
   - A record: Point to hosting IP
   - CNAME: www → yourdomain.com
3. **Enable SSL certificate**

### Environment Variables
Update your config files with production URLs:
```javascript
// src/config.js
apiBaseUrl: 'https://yourdomain.com/api'

// backend/config.js
PRODUCTION_FRONTEND_URL: 'https://yourdomain.com'
PRODUCTION_BACKEND_URL: 'https://yourdomain.com/api'
```

## 📊 Monitoring & Analytics

### Health Checks
- Backend: `/api/health`
- Frontend: Console logs and error boundaries

### Performance Monitoring
- Lighthouse audits
- Web Vitals
- Bundle analysis

## 🚨 Troubleshooting

### Common Issues

1. **Build fails**
   ```bash
   # Clear cache
   rm -rf node_modules package-lock.json
   npm install
   npm run build
   ```

2. **API calls fail**
   - Check CORS configuration
   - Verify environment variables
   - Check network tab for errors

3. **Routing issues**
   - Ensure redirects are configured
   - Check for 404.html file
   - Verify SPA routing setup

### Debug Commands
```bash
# Check environment
echo $NODE_ENV

# Test backend
curl http://localhost:5000/api/health

# Check build output
ls -la build/

# Verify dependencies
npm ls --depth=0
```

## 📞 Support

For deployment issues:
- Check hosting platform documentation
- Review error logs
- Test locally first
- Use health check endpoints

---

**Next Steps:**
1. Choose your hosting platform
2. Follow the specific deployment steps
3. Test thoroughly in production
4. Monitor performance and errors
5. Set up monitoring and analytics 