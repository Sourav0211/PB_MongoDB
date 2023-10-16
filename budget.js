const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
    validate: /^#[0-9A-Fa-f]{6}$/ // Ensure it's a valid hexadecimal color code
  },
});

module.exports = mongoose.model('Budget', budgetSchema);