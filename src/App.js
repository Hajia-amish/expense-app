// src/App.js
import React from 'react';
import './App.css';
import AddExpenseForm from './components/AddExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <AddExpenseForm />
      <hr />
      <ExpenseList />
    </div>
  );
}

export default App;
