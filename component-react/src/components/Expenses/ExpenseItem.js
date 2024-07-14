import ExpenseDate from './ExpenseDate';
// import React,{  useState } from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';
function ExpenseItem(props) {

  // const [title,setTitle] = useState(props.title)
  // const handleClick = ()=>{
  //   setTitle("updated")
  //   console.log("I am clicked")
  // }
  const PortalCard = (props)=>{
    
  }
  return (
    <Card className='expense-item'>
      
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      {/* <button onClick={handleClick}>Click me</button> */}
    </Card>
  );
}

export default ExpenseItem;