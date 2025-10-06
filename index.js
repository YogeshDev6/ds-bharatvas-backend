const express = require('express');
const app = express();
const connectDB = require('./db');
const dotenv = require('dotenv');
const cors = require('cors');
const applicants = require('./routes/applicantRoutes');
const events = require('./routes/eventRoutes'); 

// Initialize dotenv
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to DB
connectDB();

// Routes
app.use('/api', applicants);
app.use('/api', events); // NEW

// Main route
app.get('/', (req, res) => {
  res.send("Bharatvas routeee");
}); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

