import { createSlice } from '@reduxjs/toolkit';

const categories = ['Food and Drink', 'Accommodation', 'Transportation', 'Housing and Rent', 'Miscellaneous'];

const expensesSlice = createSlice({
  name: 'expenses',
  initialState: [],
  reducers: {
    addExpense: (state, action) => {
      state.push(action.payload);
    },
    updateExpense: (state, action) => {
      const { id, updatedExpense } = action.payload;
      const index = state.findIndex((expense) => expense.id === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...updatedExpense };
      }
    },
    deleteExpense: (state, action) => {
      return state.filter((expense) => expense.id !== action.payload);
    },
  },
});

export const { addExpense, updateExpense, deleteExpense } = expensesSlice.actions;
export default expensesSlice.reducer;

export const selectExpenses = (state) => state.expenses;
export const selectCategories = () => categories;
