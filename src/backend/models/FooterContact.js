const { pool } = require('../config/database');

class FooterContact {
  // Create a new footer contact submission
  static async create(contactData) {
    const { name, email, phone, message } = contactData;
    
    const query = `
      INSERT INTO footer_contacts (name, email, phone, message, created_at) 
      VALUES (?, ?, ?, ?, NOW())
    `;
    
    try {
      const [result] = await pool.execute(query, [name, email, phone, message]);
      return result.insertId;
    } catch (error) {
      throw new Error(`Error creating footer contact: ${error.message}`);
    }
  }

  // Get all footer contact submissions
  static async getAll() {
    const query = 'SELECT * FROM footer_contacts ORDER BY created_at DESC';
    
    try {
      const [rows] = await pool.execute(query);
      return rows;
    } catch (error) {
      throw new Error(`Error fetching footer contacts: ${error.message}`);
    }
  }

  // Get footer contact by ID
  static async getById(id) {
    const query = 'SELECT * FROM footer_contacts WHERE id = ?';
    
    try {
      const [rows] = await pool.execute(query, [id]);
      return rows[0];
    } catch (error) {
      throw new Error(`Error fetching footer contact: ${error.message}`);
    }
  }

  // Update footer contact status
  static async updateStatus(id, status) {
    const query = 'UPDATE footer_contacts SET status = ?, updated_at = NOW() WHERE id = ?';
    
    try {
      const [result] = await pool.execute(query, [status, id]);
      return result.affectedRows > 0;
    } catch (error) {
      throw new Error(`Error updating footer contact: ${error.message}`);
    }
  }
}

module.exports = FooterContact; 