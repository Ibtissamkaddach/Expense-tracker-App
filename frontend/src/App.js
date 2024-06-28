import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    axios.get('/api/expenses').then(response => {
      setExpenses(response.data);
    });
  }, []);

  const handleAddExpense = () => {
    axios.post('/api/expenses', { description, amount, date }).then(response => {
      setExpenses([...expenses, response.data]);
    });
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <div>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={handleAddExpense}>Add Expense</button>
      </div>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>{expense.description} - {expense.amount} - {expense.date}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;