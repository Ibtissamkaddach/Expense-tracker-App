// src/components/ExpenseTracker.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    const fetchExpenses = async () => {
      const res = await axios.get('/api/expenses');
      setExpenses(res.data);
    };

    fetchExpenses();
  }, []);

  const addExpense = async (e) => {
    e.preventDefault();
    const res = await axios.post('/api/expenses', { name, amount });
    setExpenses([...expenses, res.data]);
    setName('');
    setAmount('');
  };

  return (
    <div>
      <h2>Expense Tracker</h2>
      <form onSubmit={addExpense}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Expense name"
          required
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          required
        />
        <button type="submit">Add Expense</button>
      </form>
      <ul>
        {expenses.map((expense) => (
          <li key={expense._id}>
            {expense.name} - ${expense.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseTracker;