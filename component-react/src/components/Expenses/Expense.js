import ExpenseItem from "./ExpenseItem"
import React,{useState} from "react"
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter"
import ExpensesChart from "./ExpensesChart"
function Expense(props)
{
  const [filterYear,setFilteredYear] = useState("2020")
 
  const filterChangeHandler=(selectedYear)=>{
    setFilteredYear(selectedYear)
  }  
  const filteredExpenses = props.expenses.filter((expense)=>{
    return expense.date.getFullYear().toString()=== filterYear;
  })
   console.log(props.expenses)
    return (
        <>
        <ExpensesFilter selected = {filterYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses}> </ExpensesChart>
        {filteredExpenses.length === 0 && <p>No Expense Found</p>}
        { filteredExpenses.length > 0  && (filteredExpenses.map(expense=>(
           <ExpenseItem
           key = {expense.id}
           title={expense.title}
           amount={expense.amount}
           date={expense.date}
         />
        )))}
       
        </>
    )
}

export default Expense