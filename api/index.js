// This file helps Vercel recognize the api folder
module.exports = function handler(req, res) {
  res.status(200).json({
    message: 'API is working!',
    timestamp: new Date().toISOString(),
    availableEndpoints: [
      '/api/hello-world',
      '/api/test-connection',
      '/api/footer-contact-simple'
    ]
  });
}
