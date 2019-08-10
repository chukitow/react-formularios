import React from 'react';

const FormikForm = () => (
  <form>
    <input
      type="text"
      name="first_name"
      placeholder="First Name"/>
      <br/>
    <input
      type="text"
      name="last_name"
      placeholder="Last Name"/>
      <br/>
    <input
      type="email"
      name="email"
      placeholder="Email"/>
      <br/>
    {JSON.stringify({})}
    <br/>
  </form>
);

export default FormikForm;
