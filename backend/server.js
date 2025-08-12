const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const config = require('./config');
const connectDB = require('./database');
const Contact = require('./models/Contact');
const FooterContact = require('./models/FooterContact');
require('dotenv').config();

const app = express();
const PORT = config.port;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors(config.cors));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    environment: config.nodeEnv,
    port: PORT,
    database: 'Connected'
  });
});

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is running successfully!' });
});

// Contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    console.log('Contact form submitted:', req.body);
    
    const { name, email, subject, message } = req.body;
    
    // Save to MongoDB
    const contact = new Contact({
      name,
      email,
      subject,
      message,
      ipAddress: req.ip,
      userAgent: req.get('User-Agent')
    });
    
    await contact.save();
    console.log('Contact saved to database:', contact._id);
    
    // Here you would typically send an email using nodemailer
    // For now, just log the submission
    // TODO: Implement email sending logic
    // const transporter = nodemailer.createTransporter(config.email);
    // await transporter.sendMail({...});
    
    res.json({ 
      success: true, 
      message: 'Thank you for your message! We will get back to you soon.',
      contactId: contact._id
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later.' 
    });
  }
});

// Footer form submission
app.post('/api/footer-contact', async (req, res) => {
  try {
    console.log('Footer form submitted:', req.body);
    
    const { name, email, phone, message } = req.body;
    
    // Save to MongoDB
    const footerContact = new FooterContact({
      name,
      email,
      phone,
      message,
      ipAddress: req.ip,
      userAgent: req.get('User-Agent')
    });
    
    await footerContact.save();
    console.log('Footer contact saved to database:', footerContact._id);
    
    // Here you would typically send an email using nodemailer
    // For now, just log the submission
    // TODO: Implement email sending logic
    // const transporter = nodemailer.createTransporter(config.email);
    // await transporter.sendMail({...});
    
    res.json({ 
      success: true, 
      message: 'Thank you for your message! We will get back to you soon.',
      contactId: footerContact._id
    });
  } catch (error) {
    console.error('Footer form error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later.' 
    });
  }
});

// Get all contacts (for admin purposes)
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }).limit(50);
    res.json({ success: true, contacts });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch contacts' });
  }
});

// Get all footer contacts (for admin purposes)
app.get('/api/footer-contacts', async (req, res) => {
  try {
    const footerContacts = await FooterContact.find().sort({ createdAt: -1 }).limit(50);
    res.json({ success: true, footerContacts });
  } catch (error) {
    console.error('Error fetching footer contacts:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch footer contacts' });
  }
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ 
    message: 'Internal server error',
    error: config.nodeEnv === 'development' ? err.message : 'Something went wrong'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`🌍 Environment: ${config.nodeEnv}`);
  console.log(`🔗 Test the API at: http://localhost:${PORT}/api/test`);
  console.log(`💚 Health check at: http://localhost:${PORT}/api/health`);
});
