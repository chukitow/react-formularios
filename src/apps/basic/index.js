import React from 'react';

class Basic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
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
        <br/>
        {JSON.stringify(this.state)}
      </form>
    );
  }
}

export default Basic;
