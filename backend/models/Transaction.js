const mongoose = require('mongoose');

// Define the schema
const transactionSchema = new mongoose.Schema({
  recipient: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

// Create the model
const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
