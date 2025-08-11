// Frontend configuration for API endpoints
const config = {
  // API base URL - automatically detects environment
  apiBaseUrl: process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_API_URL || 'https://yourdomain.com/api'
    : 'http://localhost:5000/api',
  
  // Environment
  isProduction: process.env.NODE_ENV === 'production',
  
  // App settings
  appName: 'VIP Living Centers',
  appVersion: '1.0.0',
  
  // Contact information
  contact: {
    phone: '(972) 513-0224',
    email: 'viplc.management@gmail.com',
    address: '3219 Vinson Ct, Irving, TX 75060'
  }
};

export default config; 