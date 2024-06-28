// controllers/expenseController.js

const expenses = [
    { id: 1, description: 'Grocery Shopping', amount: 50, date: '2024-06-01' },
    { id: 2, description: 'Electricity Bill', amount: 30, date: '2024-06-03' }
  ];
  
  // Get all expenses
  exports.getAllExpenses = (req, res) => {
    res.status(200).json(expenses);
  };
  
  // Get a single expense by ID
  exports.getExpenseById = (req, res) => {
    const expense = expenses.find(e => e.id === parseInt(req.params.id));
    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }
    res.status(200).json(expense);
  };
  
  // Create a new expense
  exports.createExpense = (req, res) => {
    const { description, amount, date } = req.body;
    const newExpense = {
      id: expenses.length + 1,
      description,
      amount,
      date
    };
    expenses.push(newExpense);
    res.status(201).json(newExpense);
  };
  
  // Update an existing expense
  exports.updateExpense = (req, res) => {
    const expense = expenses.find(e => e.id === parseInt(req.params.id));
    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }
    const { description, amount, date } = req.body;
    expense.description = description || expense.description;
    expense.amount = amount || expense.amount;
    expense.date = date || expense.date;
    res.status(200).json(expense);
  };
  
  // Delete an expense
  exports.deleteExpense = (req, res) => {
    const index = expenses.findIndex(e => e.id === parseInt(req.params.id));
    if (index === -1) {
      return res.status(404).json({ message: 'Expense not found' });
    }
    expenses.splice(index, 1);
    res.status(204).send();
  };