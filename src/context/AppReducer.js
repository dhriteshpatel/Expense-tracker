const AppReducer = (state, action) =>{
    switch(action.type){
        case 'DELETE':
            return{
                ...state,
                transaction: state.transaction.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD':
            return{
                ...state,
                transaction: [action.payload, ...state.transaction]
            }
        default: 
        return state;
    }
}

export default AppReducer;