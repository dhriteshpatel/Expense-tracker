import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({transaction}) => {
    const { deleteFromTransaction } = useContext(GlobalContext)
    const sign = transaction.amount < 0 ? '' : '+';
    return (
        <div>
            <li className={transaction.amount < 0 ? "minus" : "plus"}>
                {transaction.text} <span>{sign}{transaction.amount}Rs</span><button onClick={() =>deleteFromTransaction(transaction.id)} className="delete-btn">X</button>
            </li>
        </div>
    )
}

export default Transaction;