import React from 'react'

const Transaction = ({text, amount}) => (
 
    <li className={`${amount > 0 ? 'plus' : 'minus'}`}>
        {text}<span>{amount}</span> <button class="delete-btn" onclick="removeTransaction(95913774)">x</button>
    </li>
 
)

export default Transaction;