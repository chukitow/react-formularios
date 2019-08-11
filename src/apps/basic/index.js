import React from 'react';

const validate = (values) => {
  if(values.first_name.trim().length === 0) {
    return { first_name: 'This field is required' };
  }

  return {};
}

class Basic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        first_name: '',
        last_name: '',
        email: '',
      },
      touched: {},
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onChange(event) {
    event.persist();
    this.setState(prevState => ({
      values: {
        ...prevState.values,
        [event.target.name]: event.target.value
      },
      errors: validate({
        ...prevState.values,
        [event.target.name]: event.target.value
      })
    }));
  }

  onBlur(event) {
    event.persist();
    this.setState(prevState => ({
      touched: {
        ...prevState.touched,
        [event.target.name]: true
      }
    }));
  }

  render() {
    return (
      <form>
        <input
          value={this.state.values.first_name}
          onChange={this.onChange}
          onBlur={this.onBlur}
          type="text"
          name="first_name"
          placeholder="First Name"/>
          {
            this.state.touched.first_name && this.state.errors.first_name
          }
          <br/>
        <input
          value={this.state.values.last_name}
          onChange={this.onChange}
          onBlur={this.onBlur}
          type="text"
          name="last_name"
          placeholder="Last Name"/>
          <br/>
        <input
          value={this.state.values.email}
          onChange={this.onChange}
          onBlur={this.onBlur}
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
