module.exports = function handler(req, res) {
  res.status(200).json({
    message: 'Hello World from API!',
    timestamp: new Date().toISOString(),
    method: req.method,
    url: req.url
  });
}
