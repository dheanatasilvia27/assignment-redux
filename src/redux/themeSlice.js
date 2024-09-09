import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    darkMode: false,
    balance: 0, 
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    deposit: (state, action) => {
      state.balance += action.payload; 
    },
    withdraw: (state, action) => {
      if (state.balance >= action.payload) {
        state.balance -= action.payload; 
      } else {
        alert("Saldo tidak cukup!"); 
      }
    }
  }
});

export const { toggleDarkMode, deposit, withdraw } = themeSlice.actions;
export default themeSlice.reducer;
