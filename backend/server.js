const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const config = require('./config');
require('dotenv').config();

const app = express();
const PORT = config.port;

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
    port: PORT
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
    
    // Here you would typically send an email using nodemailer
    // For now, just log the submission
    const { name, email, subject, message } = req.body;
    
    // TODO: Implement email sending logic
    // const transporter = nodemailer.createTransporter(config.email);
    // await transporter.sendMail({...});
    
    res.json({ 
      success: true, 
      message: 'Thank you for your message! We will get back to you soon.' 
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
    
    // Here you would typically send an email using nodemailer
    // For now, just log the submission
    const { name, email, phone, message } = req.body;
    
    // TODO: Implement email sending logic
    // const transporter = nodemailer.createTransporter(config.email);
    // await transporter.sendMail({...});
    
    res.json({ 
      success: true, 
      message: 'Thank you for your message! We will get back to you soon.' 
    });
  } catch (error) {
    console.error('Footer form error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later.' 
    });
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
