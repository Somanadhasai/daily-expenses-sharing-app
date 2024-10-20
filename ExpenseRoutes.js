const express = require('express');
const Expense = require('../models/Expense'); 
const router = express.Router();
router.post('/', async (req, res) => {
    const { amount, splitMethod, participants } = req.body;
    try {
        const newExpense = new Expense({ amount, splitMethod, participants });
        await newExpense.save();
        res.status(201).json(newExpense);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
router.get('/user/:userId', async (req, res) => {
    try {
        const expenses = await Expense.find({ 'participants.userId': req.params.userId });
        res.json(expenses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.get('/', async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.json(expenses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router; 
