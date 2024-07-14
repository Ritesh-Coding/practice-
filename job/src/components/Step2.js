import React from 'react';
import { MyTextInput, MySelect, MyRadioGroup } from './FormComponents';

const Step2 = () => {
  return (
    <>
      <MyTextInput
        label="Email Address"
        name="email"
        type="email"
        placeholder="jane@formik.com"
      />
      <MySelect label="Job Type" name="jobType">
        <option value="">Select a job type</option>
        <option value="designer">Designer</option>
        <option value="development">Developer</option>
        <option value="product">Product Manager</option>
        <option value="other">Other</option>
      </MySelect>
      <MyRadioGroup label="Preferred Contact Method" name="contactMethod">
        <label>
          <input type="radio" name="contactMethod" value="email" />
          Email
        </label>
        <label>
          <input type="radio" name="contactMethod" value="phone" />
          Phone
        </label>
      </MyRadioGroup>
    </>
  );
};

export {Step2};
