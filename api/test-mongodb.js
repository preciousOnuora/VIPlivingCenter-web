import mongoose from 'mongoose';

export default async function handler(req, res) {
  try {
    console.log('🧪 Testing MongoDB connection...');
    
    // Test connection
    const uri = process.env.MONGODB_URI || 'mongodb+srv://preonu:hiya1212@cluster0.sg0wcaf.mongodb.net/?retryWrites=true&w=majority';
    
    console.log('🔍 MONGODB_URI:', uri ? 'Set' : 'Not set');
    
    if (mongoose.connection.readyState === 1) {
      console.log('✅ Already connected to MongoDB');
      return res.status(200).json({
        success: true,
        message: 'Already connected to MongoDB',
        connectionState: mongoose.connection.readyState,
        database: mongoose.connection.name
      });
    }
    
    console.log('🔌 Attempting to connect...');
    
    const conn = await mongoose.connect(uri, {
      dbName: 'vip-living-centers',
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    
    console.log('✅ MongoDB connected successfully!');
    
    res.status(200).json({
      success: true,
      message: 'MongoDB connected successfully!',
      connectionState: mongoose.connection.readyState,
      database: conn.connection.name,
      host: conn.connection.host
    });
    
  } catch (error) {
    console.error('❌ MongoDB connection test failed:', error);
    
    res.status(500).json({
      success: false,
      message: 'MongoDB connection failed',
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}
