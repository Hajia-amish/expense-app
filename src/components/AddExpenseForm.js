// src/components/AddExpenseForm.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addExpense, updateExpense, selectCategories } from '../reducers/expensesSlice';

function AddExpenseForm({ editingExpense, setEditingExpense }) {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  const [item, setItem] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState(categories[0]);

  useEffect(() => {
    if (editingExpense) {
      setItem(editingExpense.item);
      setDate(editingExpense.date);
      setAmount(editingExpense.amount);
      setCategory(editingExpense.category);
    }
  }, [editingExpense]);

  const handleAddExpense = () => {
    if (editingExpense) {
      // Update existing expense
      dispatch(updateExpense({ id: editingExpense.id, updatedExpense: { item, date, amount, category } }));
      setEditingExpense(null);
    } else {
      // Add new expense
      dispatch(addExpense({ item, date, amount, category }));
    }
    setItem('');
    setDate('');
    setAmount('');
    setCategory(categories[0]);
  };

  return (
    <div>
      <h2>{editingExpense ? 'Edit Expense' : 'Add New Expense'}</h2>
      <input type="text" placeholder="Item" value={item} onChange={(e) => setItem(e.target.value)} />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <select value={category} onChange={(e) => setCategory(e.target.value)} className='select'>
        <option value="">Select Category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button onClick={handleAddExpense}>
        {editingExpense ? 'Save Changes' : 'Add Expense'}
      </button>
      {editingExpense && (
        <button onClick={() => setEditingExpense(null)}>Cancel Editing</button>
      )}
    </div>
  );
}

export default AddExpenseForm;
