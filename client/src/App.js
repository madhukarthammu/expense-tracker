import React from 'react';
import './style.css'
import Balance from './components/balance.component'
import IncomeExpense from './components/income-expense.component'
import TransactionList from './components/transaction-list.component'
import {AddTransaction} from './components/addtransaction.component'
import {GlobalProvider} from './context/globalstate'


function App() {
  return (
    <GlobalProvider>
    <h2 style={{textAlign: 'center'}}>Expense Tracker</h2>
    <div className="container">
     <Balance />
     <IncomeExpense />
     <TransactionList />
     <AddTransaction />
    </div>
    </GlobalProvider>
  );
}

export default App;
