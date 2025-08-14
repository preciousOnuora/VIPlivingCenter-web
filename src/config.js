// Frontend configuration for API endpoints
const config = {
  // API base URL - automatically detects environment
  apiBaseUrl: process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_API_URL || '/api' // Use relative path for Vercel
    : 'http://localhost:5001/api', // Updated to port 5001
  
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