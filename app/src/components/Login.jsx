import React, { Component, PropTypes } from 'react';


class Login extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { email, password } = this.refs;
    // call doLogin action
    this.props.doLogin({
      email: email.value,
      password: password.value
    });
  }

  render() {
    return (
      <form className="form-inline" onSubmit = {this.onSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputName2">Name</label>
          <input ref="email" type="text" className="form-control" placeholder="email" />
        </div>
        { ' ' }
        <div className="form-group">
          <label htmlFor="exampleInputEmail2">Email</label>
          <input ref="password" type="password" className="form-control" placeholder="password" />
        </div>
        { ' ' }
        <button type="submit" className="btn btn-default">Login</button>
      </form>
    );
  }
}

Login.propTypes = {
  doLogin: PropTypes.func.isRequired
};

export default Login;
