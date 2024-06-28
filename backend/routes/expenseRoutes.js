const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

// Debugging line to check the path
const path = require('path');
console.log('Resolved path:', path.resolve(__dirname, '../controllers/expenseController'));

router.get('/expenses', expenseController.getAllExpenses);
router.get('/expenses/:id', expenseController.getExpenseById);
router.post('/expenses', expenseController.createExpense);
router.put('/expenses/:id', expenseController.updateExpense);
router.delete('/expenses/:id', expenseController.deleteExpense);

// other routes...

module.exports = router;