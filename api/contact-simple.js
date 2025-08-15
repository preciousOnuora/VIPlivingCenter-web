export default function handler(req, res) {
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
    console.log('📝 Contact form request received');
    
    // Validate request body
    const { name, email, subject, message } = req.body;
    
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }
    
    console.log('Contact form data:', { name, email, subject, message });
    
    // For now, just return success without saving to database
    res.status(200).json({
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
      receivedData: { name, email, subject, message }
    });
  } catch (error) {
    console.error('❌ Contact form error:', error);
    
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.'
    });
  }
} 