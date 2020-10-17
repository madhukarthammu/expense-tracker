import React, {useContext} from 'react'
import Transaction from './transaction.component'
import {GlobalContext} from '../context/globalstate'

const TransactionList = () => {
   const {transactions} = useContext(GlobalContext);

    return (
        <ul id="list" className="list">
       { 
            transactions.map(({id,text,amount}) => (            
                <Transaction key={id} id={id} text={text} amount={amount}/>        
            ))
       }
        </ul>
    )
}

export default TransactionList;