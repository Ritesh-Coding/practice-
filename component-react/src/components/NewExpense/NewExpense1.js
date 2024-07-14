import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense1=(props)=>{
    const expenseDataHandler = (enteredExpenseData) =>{   //THIS FUNCTION WILL GET THE DATA FROM THE CHILD
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        } 
        props.onSaveNewExpense(expenseData)   //send the data to the parent App
       
    }      
    
    
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData = {expenseDataHandler} />
        </div>
    )
 
}

export default NewExpense1