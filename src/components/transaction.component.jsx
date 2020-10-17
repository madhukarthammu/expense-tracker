import React, {useContext} from 'react'
import { GlobalContext } from '../context/globalstate';

const Transaction = ({id, text, amount}) => {
    
    const {deleteTransaction} = useContext(GlobalContext);

    return( 
    <li className={`${amount > 0 ? 'plus' : 'minus'}`}>
        {text}<span>{amount}</span> <button className="delete-btn"
        onClick={() => deleteTransaction(id)}
        >x</button>
    </li> 
)
}

export default Transaction;