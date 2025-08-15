import mongoose from 'mongoose';
import FooterContact from '../../backend/models/FooterContact.js';

// MongoDB connection
const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      return; // Already connected
    }
    
    const uri = process.env.MONGODB_URI || 'mongodb+srv://preonu:hiya1212@cluster0.sg0wcaf.mongodb.net/?retryWrites=true&w=majority';
    
    await mongoose.connect(uri, {
      dbName: 'vip-living-centers',
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    
    console.log('🗄️ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    throw error;
  }
};

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    console.log('📝 Footer contact form request received');
    
    // Connect to MongoDB
    await connectDB();
    
    // Validate request body
    const { name, email, phone, message } = req.body;
    
    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }
    
    console.log('Footer form data:', { name, email, phone, message });
    
    // Create new footer contact entry
    const footerContact = new FooterContact({
      name,
      email,
      phone,
      message,
      source: 'footer',
      ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      userAgent: req.headers['user-agent']
    });
    
    // Save to database
    const savedContact = await footerContact.save();
    
    console.log('✅ Footer contact saved to database:', savedContact._id);
    
    res.status(200).json({
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
      receivedData: { name, email, phone, message },
      id: savedContact._id
    });
  } catch (error) {
    console.error('❌ Footer form error:', error);
    
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
} 