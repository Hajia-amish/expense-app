// src/components/ExpenseList.js

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteExpense, selectExpenses } from '../reducers/expensesSlice';
import AddExpenseForm from './AddExpenseForm';

function ExpenseList() {
  const dispatch = useDispatch();
  const expenses = useSelector(selectExpenses);

  const [editingExpense, setEditingExpense] = useState(null); // Track editing expense

  const handleDeleteExpense = (id) => {
    dispatch(deleteExpense(id));
    if (editingExpense && editingExpense.id === id) {
      setEditingExpense(null); // Clear editing if deleting currently editing expense
    }
  };

  const handleEditExpense = (expense) => {
    setEditingExpense(expense);
  };

  return (
    <div>
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <div>
              <strong>Item: {expense.item}</strong>
              <p>Date: {expense.date}</p>
              <p>Amount: ${expense.amount}</p>
              <p>Category: {expense.category}</p>
              <button onClick={() => handleEditExpense(expense)}>Edit</button> {/* Edit button */}
              <button onClick={() => handleDeleteExpense(expense.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      {editingExpense && (
        <div>
          <h2>Edit Expense</h2>
          <AddExpenseForm
            editingExpense={editingExpense}
            setEditingExpense={setEditingExpense}
          />
        </div>
      )}
    </div>
  );
}

export default ExpenseList;
