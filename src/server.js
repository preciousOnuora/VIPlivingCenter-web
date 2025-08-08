const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is running successfully!' });
});

// Contact form submission
app.post('/api/contact', (req, res) => {
  console.log('Contact form submitted:', req.body);
  res.json({ success: true, message: 'Thank you for your message! We will get back to you soon.' });
});

// Footer form submission
app.post('/api/footer-contact', (req, res) => {
  console.log('Footer form submitted:', req.body);
  res.json({ success: true, message: 'Thank you for your message! We will get back to you soon.' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Test the API at: http://localhost:${PORT}/api/test`);
});
