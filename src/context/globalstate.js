import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

const initialstate = {
    transactions: []
}

export const GlobalContext = createContext(initialstate);

export const GlobalProvider = ({children}) => {
  const [state, dispatch] =  useReducer(AppReducer, initialstate)

  const addTransaction = (transaction) => dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
  })

  const deleteTransaction = (id) => dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
  })

  return (
     <GlobalContext.Provider value={{
         transactions: state.transactions,
         addTransaction,
         deleteTransaction 
     }}>
         {children}
     </GlobalContext.Provider>
  )
}