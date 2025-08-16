const mongoose = require('mongoose');

module.exports = async function handler(req, res) {
  try {
    console.log('🧪 Testing contact API...');
    
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
    
    // Test connection
    const client = new (require('mongodb').MongoClient)(mongoUri, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    
    console.log('🔌 Attempting to connect...');
    
    await client.connect();
    console.log('✅ Connected to MongoDB!');
    
    const db = client.db('vip-living-centers');
    const collections = await db.listCollections().toArray();
    
    // Check if contacts collection exists
    const contactsCollection = collections.find(c => c.name === 'contacts');
    const footerCollection = collections.find(c => c.name === 'footercontacts');
    
    await client.close();
    
    res.status(200).json({
      success: true,
      message: 'Contact API test successful!',
      database: 'vip-living-centers',
      collections: collections.map(c => c.name),
      contactsCollection: contactsCollection ? 'exists' : 'missing',
      footerCollection: footerCollection ? 'exists' : 'missing',
      environment: process.env.NODE_ENV || 'not set'
    });
    
  } catch (error) {
    console.error('❌ Contact API test failed:', error);
    
    res.status(500).json({
      success: false,
      message: 'Contact API test failed',
      error: error.message,
      environment: process.env.NODE_ENV || 'not set'
    });
  }
}
