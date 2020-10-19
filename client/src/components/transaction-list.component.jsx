import React, {useEffect,useContext} from 'react'
import Transaction from './transaction.component'
import {GlobalContext} from '../context/globalstate'

const TransactionList = () => {
    const {getTransactions} = useContext(GlobalContext);
  
    useEffect(() => {
      getTransactions();
      //eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

   const {transactions} = useContext(GlobalContext);
    return (
        <ul id="list" className="list">
       { 
            transactions.map(({_id,text,amount}) => (            
                <Transaction key={_id} _id={_id} text={text} amount={amount}/>        
            ))
       }
        </ul>
    )
}

export default TransactionList;