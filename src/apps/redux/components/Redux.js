import React from 'react';

const Redux = (props) => (
  <form>
    <input
      value={props.first_name}
      onChange={(e) => props.changeFirstName(e.target.value)}
      type="text"
      name="first_name"
      placeholder="First Name"/>
      <br/>
    <input
      value={props.last_name}
      onChange={(e) => props.changeLastName(e.target.value)}
      type="text"
      name="last_name"
      placeholder="Last Name"/>
      <br/>
    <input
      value={props.email}
      onChange={(e) => props.changeEmail(e.target.value)}
      type="email"
      name="email"
      placeholder="Email"/>
      <br/>
    <br/>
    {JSON.stringify(props)}
  </form>
);

export default Redux;
