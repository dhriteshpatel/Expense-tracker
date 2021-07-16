import React,{useState,useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const { addToTransaction } = useContext(GlobalContext)
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    function submit (e){
        e.preventDefault();
        const transaction1 = {
            id : Math.floor(Math.random()* 100000),
            text,
            amount: parseInt(amount)
        }
        addToTransaction(transaction1)
    }
    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={submit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text}  placeholder="Enter text..." onChange={(e) =>setText(e.target.value)}/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
                        (negative - expense, positive - income)</label
                    >
                    <input type="number" value={amount}  placeholder="Enter amount..." onChange={(e) =>setAmount(e.target.value)}/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction;
