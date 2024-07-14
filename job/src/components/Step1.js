import React from 'react';
import { MyTextInput } from './FormComponents';

const Step1 = () => {
  return (
    <>
      <MyTextInput
        label="First Name"
        name="firstName"
        type="text"
        placeholder="Jane"
      />
      <MyTextInput
        label="Last Name"
        name="lastName"
        type="text"
        placeholder="Doe"
      />
    </>
  );
};

export {Step1};
