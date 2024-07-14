import React,{useState} from "react";
import './ExpenseForm.css'
const ExpenseForm = (props) => {
    const [enterTitle,setTitle]= useState("")
    const [enteredAmount,setEnteredAmount]= useState("")
    const [enteredDate,serEnteredDate] = useState("")

    

    //*********************************************************************** */


    // as we have to make the three hander we can reduce it to the once by  making the oject
    // const[userInput,setUserInput]= useState({
    //     enterTitle : "",
    //     enteredAmount : "",
    //     enteredDate : ""
    // })


    // const handleTitleChange=(event)=>{
    //     setTitle(event.target.value)

        // this is not good as in the case where multiple values are updated at the same time then it would not reflect the latest change
        // setUserInput({   
         //     ...userInput,
        //     enterTitle : event.target.value
        // }
        // )

        // instead of the above step we can do
        // setUserInput((prevState)=>{
        //     return { ...prevState, enterTitle : event.target.value  }
        // })
    // }

    // const handleAmountChange=(event)=>{
    //     setEnteredAmount(event.target.value)

        // setUserInput({
        //     ...userInput,
        //     enteredAmount : event.target.value
        // }
        // )
    // }
    
    // const handleDateChange=(event)=>{
    //     serEnteredDate(event.target.value)

        // setUserInput({
        //     ...userInput, //this is used to maintaining the reaminng state as they are not changed
        //     enteredDate : event.target.value
        // }
        // )
    // }
      
   
    //********************************************************************************* */
    //instead of making three functions we can only make one function 
    const inputChangeHandler=(identifier,value)=>{
        if (identifier === 'title'){
            setTitle(value)
        }
        else if (identifier === 'amount'){
            setEnteredAmount(value)
        }
        else{
            serEnteredDate(value)
        }
    }

    const submitHandler=(event)=>{
        event.preventDefault()
        const formData = {
            title : enterTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)

        }
        props.onSaveExpenseData(formData)   //HERE WE PASS THE DATA FROM THE CHILD TO parent
        setTitle("");
        setEnteredAmount("");
        serEnteredDate("")
        
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">

                <div className="new-expense__control">
                    <label>Title</label>
                    {/* <input type="text" onChange={handleTitleChange}></input> */}
                    <input type="text" value={enterTitle} onChange={(event)=>{
                        inputChangeHandler("title",event.target.value)
                    }}></input>

                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={(event)=>{
                        inputChangeHandler("amount",event.target.value)
                    }}></input>
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-04-01" max="2024-12-30" value={enteredDate} onChange={(event)=>{
                        inputChangeHandler("date",event.target.value)
                    }}></input>
                </div>

                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm