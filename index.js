const express = require('express');
const app = express();
const connectDB = require('./db');
const dotenv = require('dotenv');
const cors = require('cors');
const cars = require('./routes/carRoutes');
const applicants = require('./routes/applicantRoutes');

// Initialize dotenv
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to DB
connectDB();

// Routes
app.use('/api', cars);
app.use('/api', applicants);


// Main route
app.get('/', (req, res) => {
  res.send("Spinny clone routeee");
}); 

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
