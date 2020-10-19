import React, {useContext} from 'react'
import { GlobalContext } from '../context/globalstate';

const Transaction = ({_id, text, amount}) => {
    
    const {deleteTransaction} = useContext(GlobalContext);
    const sign = amount < 0 ? '-' : '+';
    return( 
    <li className={`${amount > 0 ? 'plus' : 'minus'}`}>
        {text}<span>{sign}${Math.abs(amount)}</span> <button className="delete-btn"
        onClick={() => deleteTransaction(_id)}
        >x</button>
    </li> 
)
}

export default Transaction;