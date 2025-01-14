const express = require('express');
const mongoose = require('mongoose'); // Import mongoose
const notes = require('./notes.model'); // Import notes model
const app = express();
const port = process.env.PORT || 5000;

// Load environment variables (like ATLAS_URI)
require('dotenv').config();

const ATLAS_URI = process.env.ATLAS_URI;

// Connect to MongoDB
mongoose.connect(ATLAS_URI).then(() => console.log('Connected to MongoDB Atlas')).catch((error) => console.error('Error connecting to MongoDB:', error));

// Middleware (if needed, e.g., JSON parsing)
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});


app.post('/notes', async(req, res) => {
    try {
        const note=await notes.create(req.body);
        res.status(201).json({
            message: 'Note created successfully',
            note: note
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});