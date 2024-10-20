const express = require('express');
const User = require('../models/User'); 
const router = express.Router();
router.post('/', async (req, res) => {
    const { email, name, mobile } = req.body;
    try {
        const newUser  = new User({ email, name, mobile });
        await newUser .save();
        res.status(201).json(newUser );
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User  not found' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router; 
