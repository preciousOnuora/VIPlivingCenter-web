const { pool } = require('../config/database');

class Contact {
  // Create a new contact submission
  static async create(contactData) {
    const { name, email, subject, message } = contactData;
    
    const query = `
      INSERT INTO contacts (name, email, subject, message, created_at) 
      VALUES (?, ?, ?, ?, NOW())
    `;
    
    try {
      const [result] = await pool.execute(query, [name, email, subject, message]);
      return result.insertId;
    } catch (error) {
      throw new Error(`Error creating contact: ${error.message}`);
    }
  }

  // Get all contact submissions
  static async getAll() {
    const query = 'SELECT * FROM contacts ORDER BY created_at DESC';
    
    try {
      const [rows] = await pool.execute(query);
      return rows;
    } catch (error) {
      throw new Error(`Error fetching contacts: ${error.message}`);
    }
  }

  // Get contact by ID
  static async getById(id) {
    const query = 'SELECT * FROM contacts WHERE id = ?';
    
    try {
      const [rows] = await pool.execute(query, [id]);
      return rows[0];
    } catch (error) {
      throw new Error(`Error fetching contact: ${error.message}`);
    }
  }

  // Update contact status (e.g., mark as read)
  static async updateStatus(id, status) {
    const query = 'UPDATE contacts SET status = ?, updated_at = NOW() WHERE id = ?';
    
    try {
      const [result] = await pool.execute(query, [status, id]);
      return result.affectedRows > 0;
    } catch (error) {
      throw new Error(`Error updating contact: ${error.message}`);
    }
  }
}

module.exports = Contact; 