import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm=(props)=>{

    const [formVisible, setFormVisible] = useState(false);
    
    const [enteredtitle,setTitle]=useState("");
    
    const titleClickHandler=(event)=>{
        setTitle(event.target.value);
    };

    const [enteredamount,setAmount]=useState("");
    
    const amountClickHandler=(event)=>{
        setAmount(event.target.value);
    };

    const [entereddate,setDate]=useState("");
    
    const dateClickHandler=(event)=>{
        setDate(event.target.value);
    };

    const formSubmitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            title:enteredtitle,
            amount:enteredamount,
            date:new Date(entereddate),
        }
        props.onSaveExpenseForm(expenseData);
        setTitle("");
        setAmount("");

        setDate("");
        

    }
    const showFormHandler = () => {
        setFormVisible(true);
    };

    const cancelFormHandler = () => {
        setFormVisible(false); 
    };

    return(
        <div> {!formVisible && <button onClick={showFormHandler}>Add New Expense</button>}
        {formVisible && (
            
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredtitle} onChange={titleClickHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredamount} onChange={amountClickHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={entereddate} onChange={dateClickHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
            <button type="button" onClick={cancelFormHandler}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>)}
        </div>
    )
};

export default ExpenseForm;