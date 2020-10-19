import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

const initialstate = {
    transactions: []
}

export const GlobalContext = createContext(initialstate);

export const GlobalProvider = ({children}) => {
  const [state, dispatch] =  useReducer(AppReducer, initialstate)

  const getTransactions = async () => {
      try {
        const res = await axios.get('/api/v1/transactions');
    
        dispatch({
            type: 'GET_TRANSACTIONS',
            payload: res.data.data
        })
      } catch(err) {
          console.log(err.message);
      }
   
  }

  const addTransaction = async (transaction) => {
      try {
        const res = await axios.post('/api/v1/transactions', transaction)

        dispatch({
            type: 'ADD_TRANSACTION',
            payload: res.data.data
        })
      } catch {

      }
  }

  const deleteTransaction = async (id) => {
    try {
        await axios.delete(`/api/v1/transactions/${id}`)
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    } catch(err) {
        console.log(err.message);
    }
  }

  return (
     <GlobalContext.Provider value={{
         transactions: state.transactions,
         addTransaction,
         deleteTransaction,
         getTransactions
     }}>
         {children}
     </GlobalContext.Provider>
  )
}