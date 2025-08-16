export default async function handler(req, res) {
  try {
    console.log('🧪 Testing connection...');
    
    // Check environment variables
    const mongoUri = process.env.MONGODB_URI;
    console.log('🔍 MONGODB_URI exists:', !!mongoUri);
    
    if (!mongoUri) {
      return res.status(500).json({
        success: false,
        message: 'MONGODB_URI environment variable is not set',
        error: 'Missing environment variable'
      });
    }
    
    // Test basic connection without mongoose
    const { MongoClient } = await import('mongodb');
    
    const client = new MongoClient(mongoUri, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    
    console.log('🔌 Attempting to connect...');
    
    await client.connect();
    console.log('✅ Connected to MongoDB!');
    
    const db = client.db('vip-living-centers');
    const collections = await db.listCollections().toArray();
    
    await client.close();
    
    res.status(200).json({
      success: true,
      message: 'MongoDB connection successful!',
      database: 'vip-living-centers',
      collections: collections.map(c => c.name),
      environment: process.env.NODE_ENV || 'not set'
    });
    
  } catch (error) {
    console.error('❌ Connection test failed:', error);
    
    res.status(500).json({
      success: false,
      message: 'MongoDB connection failed',
      error: error.message,
      environment: process.env.NODE_ENV || 'not set'
    });
  }
}
