import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode, deposit, withdraw } from './redux/themeSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const balance = useSelector((state) => state.theme.balance);
  const [amount, setAmount] = useState(0);

  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };

  const handleDeposit = () => {
    if (amount > 0) {
      dispatch(deposit(Number(amount)));
      setAmount(0);
    }
  };

  const handleWithdraw = () => {
    if (amount > 0) {
      dispatch(withdraw(Number(amount)));
      setAmount(0);
    }
  };

  return (
    <div className={darkMode ? 'app dark-mode' : 'app light-mode'}>
      <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
      <button onClick={handleToggle}>Toggle Mode</button>

      <h2>Saldo: Rp{balance}</h2>

      <div className="transaction">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Masukkan jumlah"
        />
        <button onClick={handleDeposit}>Simpan Uang</button>
        <button onClick={handleWithdraw}>Ambil Uang</button>
      </div>
    </div>
  );
}

export default App;
