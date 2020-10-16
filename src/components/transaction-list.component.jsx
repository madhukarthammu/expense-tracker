import React from 'react'
import Transaction from './transaction.component'

const TransactionList = () => {

const transactions= [
      { id: 1, text: 'Flower', amount: -20 },
      { id: 2, text: 'Salary', amount: 300 },
      { id: 3, text: 'Book', amount: -10 },
      { id: 4, text: 'Camera', amount: 150 }
    ];

    return (
        <ul id="list" className="list">
       { 
            transactions.map(({id,text,amount}) => (            
                <Transaction key={id} text={text} amount={amount}/>        
            ))
       }
        </ul>
    )
}

export default TransactionList;