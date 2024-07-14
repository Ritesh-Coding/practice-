import React from 'react';

import '../ExpenseFilter/ExpenseFilter.css';

const ExpensesFilter = (props) => {
  console.log("sfda",props.selected)
 const handleFilterChange =(event)=>{
      let filterValue =  event.target.value  
      console.log("fasdfasd",filterValue)   
      props.onChangeFilter(filterValue)
 }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange = {handleFilterChange}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;