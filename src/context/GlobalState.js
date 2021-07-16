import React,{createContext,useReducer} from 'react';
import AppReducer from './AppReducer'

const initialState = {
   transaction: []    
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);
    

    function deleteFromTransaction (id){
        dispatch({
            type: "DELETE",
            payload: id
        })
    }

    function addToTransaction (transaction){
        dispatch({
            type: "ADD",
            payload: transaction
        })
        console.log(transaction)
    }

    return(<GlobalContext.Provider
         value={{
             transaction: state.transaction,
             deleteFromTransaction,
             addToTransaction
         }}
         >
        {props.children}
        </GlobalContext.Provider>)
}