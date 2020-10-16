import React from 'react';
import './style.css'
import Balance from './components/balance.component'
import IncomeExpense from './components/income-expense.component'
import TransactionList from './components/transaction-list.component'
import AddTransaction from './components/addtransaction.component'

function App() {
  return (
    <div className="container">
     <h2>Expense Tracker</h2>
     <Balance />
     <IncomeExpense />
     <TransactionList />
     <AddTransaction />
    </div>
  );
}

export default App;
