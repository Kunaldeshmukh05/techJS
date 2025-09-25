const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// GET /api/food/first
router.get('/food/first', async (req, res) => {
    try {
        
        // Get database instance
        const db = mongoose.connection.db;
        
        // Find first document
        const foodCollection = db.collection('food');
        const firstDocument = await foodCollection.findOne({});
        
        if (!firstDocument) {
            return res.status(404).json({ message: 'No documents found in food collection' });
        }
        
        res.json(firstDocument);
        
    } catch (error) {
        console.error('Error fetching document:', error);
        res.status(500).json({ 
            message: 'Server error',
            error: error.message 
        });
    }
});

module.exports = router;