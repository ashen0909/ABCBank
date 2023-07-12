import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Home from '../Home'





const Transaction = () => {
  const [balance, setBalance] = useState(0);
  const [transactionType, setTransactionType] = useState('');
  const [transactionAmount, setTransactionAmount] = useState('');

  const handleTransaction = () => {
    const amount = parseFloat(transactionAmount);
    if (!isNaN(amount) && amount > 0) {
      if (transactionType === 'deposit') 
        setBalance(prevBalance => prevBalance + amount);
       else if (transactionType === 'withdraw')
      
       {
        if (amount <= balance) {
          setBalance(prevBalance => prevBalance - amount);
        } else {
          alert('Insufficient balance');
         
        }
      }
    }
    setTransactionAmount('');
  };

  const handleTransactionTypeChange = event => {
    setTransactionType(event.target.value);
  };

  const handleTransactionAmountChange = event => {
    setTransactionAmount(event.target.value);
  };
  

  return (
    <div>
      <Home />
   <br/>
          <img
            src='https://cdn.dribbble.com/users/189524/screenshots/7202003/media/f56ec5c320f89eb6f6a3dad9567da9cf.gif'
            className='rounded'
            width={450}
            height={300}
            alt='user login'
          /><br /><br />
        <h1>ABC Bank Account</h1><br /><br />
        <p>Balance: Rs.{balance.toFixed(2)}</p>
        <div className="transaction-section">
          <h3>Transfer</h3>
          <div className="col-sm-5 p-2">
            <input
              type="number"
              value={transactionAmount}
              onChange={handleTransactionAmountChange}
              placeholder="Enter amount"/>
            <select value={transactionType} onChange={handleTransactionTypeChange}>
              <option value="">-- Select Transaction Type --</option>
              <option value="deposit">Deposit</option>
              <option value="withdraw">Withdraw</option>
            </select>
          </div><br />

          <div className='col-12 p-2'>
          <button className='btn btn-outline-primary w-100' onClick={handleTransaction}>Transfer</button></div>

        </div><br />
      </div>
     
    
  );
};

export default Transaction;