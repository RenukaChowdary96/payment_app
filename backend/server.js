const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Transaction = require('./models/Transaction'); // Ensure this path is correct

const app = express();
const PORT = 5000;

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/paytmClone', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Middleware
app.use(cors());
app.use(express.json());

// Default route
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

// Transfer API Route
app.post('/api/transfer', async (req, res) => {
  const { recipient, amount } = req.body;

  // Validate request body
  if (!recipient || !amount) {
    return res.status(400).json({ message: 'Recipient and amount are required.' });
  }

  try {
    // Save transaction to the database
    const transaction = new Transaction({ recipient, amount });
    await transaction.save();

    console.log(`Transferring ₹${amount} to ${recipient}`);
    res.status(200).json({ message: `₹${amount} successfully transferred to ${recipient}` });
  } catch (error) {
    console.error('Error saving transaction:', error);
    res.status(500).json({ message: 'Failed to process transaction.' });
  }
});

// Get all transactions
app.get('/api/transactions', async (req, res) => {
  try {
    // Fetch transactions from the database
    const transactions = await Transaction.find().sort({ date: -1 }); // Sorted by most recent
    res.status(200).json(transactions);
  } catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).json({ message: 'An error occurred while fetching transactions.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
