const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/qlhanghoa', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connection to MongoDB successful'))
  .catch(err => console.error(`MongoDB connection error: ${err.message}. Please check your connection string.`)); // Improved error message

// Routes
app.get('/', (req, res) => {
  res.send('Hệ thống quản lý hàng hóa đang hoạt động!'); // Added exclamation mark
});

// 404 Error handling
app.use((req, res) => {
  res.status(404).send('Sorry, page not found');
});

const PORT = process.env.PORT || 5000;
appl.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});