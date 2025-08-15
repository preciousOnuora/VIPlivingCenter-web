// Configuration file for environment variables
const config = {
  // Server configuration
  port: process.env.PORT || 5001, // Changed from 5000 to 5001
  nodeEnv: process.env.NODE_ENV || 'development',
  
  // Email configuration
  email: {
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: process.env.EMAIL_PORT || 587,
    user: process.env.EMAIL_USER || 'viplc.management@gmail.com',
    pass: process.env.EMAIL_PASS || '',
    secure: false
  },
  
  // MongoDB configuration - Updated to use MongoDB Atlas
  mongodb: {
    uri: process.env.MONGODB_URI || 'mongodb+srv://preonu:hiya1212@cluster0.sg0wcaf.mongodb.net/?retryWrites=true&w=majority',
    options: {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    }
  },
  
  // CORS configuration
  cors: {
    origin: process.env.NODE_ENV === 'production' 
      ? [process.env.PRODUCTION_FRONTEND_URL || 'https://yourdomain.com']
      : [process.env.FRONTEND_URL || 'http://localhost:3000'],
    credentials: true
  },
  
  // API configuration
  api: {
    baseUrl: process.env.NODE_ENV === 'production'
      ? process.env.PRODUCTION_BACKEND_URL || 'https://yourdomain.com/api'
      : `http://localhost:${process.env.PORT || 5001}/api`
  }
};

module.exports = config; 