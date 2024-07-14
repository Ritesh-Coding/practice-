

import { useState } from 'react';
import Expense from './components/Expenses/Expense';
import NewExpense1 from './components/NewExpense/NewExpense1.js';
function App() {
  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenses,setExpense]= useState(DUMMY_EXPENSES)
  const updatingFormData=(expense)=>{
    
    setExpense((prevExpense)=>{
       return [expense,...prevExpense]
    }) 
  }

  return (
    <div>
      <NewExpense1 onSaveNewExpense = {updatingFormData}/>

      <Expense expenses = {expenses}></Expense>
    </div>
  );
}

export default App;
