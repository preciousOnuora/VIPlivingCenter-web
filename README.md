# VIP Living Centers Website

A modern, responsive website for VIP Living Centers - a senior living community offering assisted living, memory care, and respite care services.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Contact Forms**: Integrated contact and footer forms with backend API
- **Dynamic Routing**: React Router for seamless navigation
- **Modern UI**: Beautiful animations and smooth transitions
- **Production Ready**: Optimized for deployment and production use

## 🚀 Quick Start

### Prerequisites

- Node.js >= 16.0.0
- npm >= 8.0.0

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-website
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

4. **Set up environment variables**
   ```bash
   # Copy the example environment file
   cp backend/env.example backend/.env
   
   # Edit backend/.env with your actual values
   # Update EMAIL_USER, EMAIL_PASS, and other variables
   ```

5. **Start development servers**
   ```bash
   # Start both frontend and backend concurrently
   npm run dev
   
   # Or start them separately:
   # Frontend: npm start
   # Backend: npm run backend
   ```

## 🛠️ Available Scripts

### Frontend
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

### Backend
- `npm run backend` - Start backend development server
- `npm run backend:prod` - Start backend in production mode

### Combined
- `npm run dev` - Start both frontend and backend
- `npm run build:all` - Build both frontend and backend
- `npm run deploy` - Deploy to GitHub Pages

## 🌍 Environment Variables

### Backend (.env)
```env
PORT=5000
NODE_ENV=development
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
FRONTEND_URL=http://localhost:3000
PRODUCTION_FRONTEND_URL=https://yourdomain.com
PRODUCTION_BACKEND_URL=https://yourdomain.com/api
```

### Frontend
The frontend automatically detects the environment and uses appropriate API URLs.

## 🚀 Deployment

### GitHub Pages
1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

### Manual Deployment
1. **Build the frontend**
   ```bash
   npm run build
   ```

2. **Upload the `build` folder** to your web server

3. **Deploy the backend** to your hosting service (Heroku, Vercel, etc.)

## 📁 Project Structure

```
my-website/
├── public/                 # Static files
├── src/                    # React source code
│   ├── components/         # React components
│   ├── Images/            # Image assets
│   ├── Videos/            # Video assets
│   └── config.js          # Frontend configuration
├── backend/                # Express.js backend
│   ├── config.js          # Backend configuration
│   ├── server.js          # Express server
│   └── package.json       # Backend dependencies
└── package.json            # Frontend dependencies
```

## 🔧 Configuration

### Frontend Configuration
Edit `src/config.js` to update:
- API endpoints
- Contact information
- App settings

### Backend Configuration
Edit `backend/config.js` to update:
- Server settings
- Email configuration
- CORS settings

## 📧 Email Setup

To enable email functionality:

1. **Gmail Setup**
   - Enable 2-factor authentication
   - Generate an app password
   - Update `EMAIL_USER` and `EMAIL_PASS` in backend `.env`

2. **Other Email Providers**
   - Update `EMAIL_HOST`, `EMAIL_PORT`, and other settings in backend `.env`

## 🐛 Troubleshooting

### Common Issues

1. **Port conflicts**
   - Change `PORT` in backend `.env`
   - Update frontend config if needed

2. **CORS errors**
   - Check `FRONTEND_URL` in backend `.env`
   - Ensure URLs match exactly

3. **Email not working**
   - Verify email credentials in `.env`
   - Check email provider settings

### Development Tips

- Use `npm run dev` to start both servers simultaneously
- Check browser console and terminal for error messages
- Use the health check endpoint: `/api/health`

## 📱 Browser Support

- Chrome >= 90
- Firefox >= 88
- Safari >= 14
- Edge >= 90

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 📞 Support

For support or questions:
- Phone: (972) 513-0224
- Email: viplc.management@gmail.com
- Address: 3219 Vinson Ct, Irving, TX 75060

---

**VIP Living Centers** - Providing compassionate care in a home-like environment.
