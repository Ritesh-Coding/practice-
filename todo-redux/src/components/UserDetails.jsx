import React, { useState } from 'react';
import DeleteAllUser from './DeleteAllUser';
import { fakeUsereData } from '../api';
import { useDispatch } from 'react-redux';
import { addUser } from './store/Slices/UserSlice';
import DisplayUser from './DisplayUser';

const UserDetails = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const addNewUser = (payload) => {
    console.log(payload);
    dispatch(addUser(payload.trim()));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim() !== '') {
      addNewUser(input);
      setInput('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter user"
        />
        <button type="submit">Add User</button>
      </form>
      <button onClick={() => addNewUser(fakeUsereData())}>Add Fake User</button>
      <ul>
        <DisplayUser />
      </ul>
      <hr />
      <DeleteAllUser />
    </div>
  );
};

export default UserDetails;
