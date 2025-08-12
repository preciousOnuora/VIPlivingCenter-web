const mongoose = require('mongoose');

const footerContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  phone: {
    type: String,
    required: [true, 'Phone is required'],
    trim: true,
    maxlength: [20, 'Phone cannot exceed 20 characters']
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: [1000, 'Message cannot exceed 1000 characters']
  },
  status: {
    type: String,
    enum: ['new', 'read', 'replied', 'archived'],
    default: 'new'
  },
  source: {
    type: String,
    default: 'footer',
    enum: ['footer', 'contact-page']
  },
  ipAddress: {
    type: String,
    trim: true
  },
  userAgent: {
    type: String,
    trim: true
  }
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

// Index for better query performance
footerContactSchema.index({ email: 1, createdAt: -1 });
footerContactSchema.index({ status: 1, createdAt: -1 });
footerContactSchema.index({ source: 1, createdAt: -1 });

module.exports = mongoose.model('FooterContact', footerContactSchema); 