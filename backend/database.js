const mongoose = require('mongoose');
const config = require('./config');

// MongoDB connection
const connectDB = async () => {
  try {
    console.log('🔍 Connecting to MongoDB with URI:', config.mongodb.uri);
    
    const connectionOptions = {
      ...config.mongodb.options,
      dbName: 'vip-living-centers'
    };
    
    console.log('🔍 Connection options:', connectionOptions);
    
    const conn = await mongoose.connect(config.mongodb.uri, connectionOptions);
    
    console.log(`🗄️ MongoDB Connected: ${conn.connection.host}`);
    console.log(`📊 Database: ${conn.connection.name}`);
    
    // Handle connection events
    mongoose.connection.on('error', (err) => {
      console.error('❌ MongoDB connection error:', err);
    });
    
    mongoose.connection.on('disconnected', () => {
      console.log('🔌 MongoDB disconnected');
    });
    
    // Graceful shutdown
    process.on('SIGINT', async () => {
      await mongoose.connection.close();
      console.log('🛑 MongoDB connection closed through app termination');
      process.exit(0);
    });
    
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB; 