import React, {useContext} from 'react'
import {GlobalContext} from '../context/globalstate'

const Balance = () => {
    const {transactions} = useContext(GlobalContext)

    const amounts = transactions.map(item => item.amount)

    const total = amounts.reduce((acc, item) => acc = acc+= item, 0)

    return (
    <div>
        <h4>YOUR BALANCE</h4>
        <h1>${total}</h1>
    </div>
)}

export default Balance;