import React, { Component, PropTypes } from 'react';
import Login from './Login';
import Logout from './Logout';

class NavBar extends Component {

  render() {
    const { isLoggedIn } = this.props;
    return (
      <nav className="navbar navbar-default">
        <div className="">
          <a className="navbar-brand" href="#">Quotes App</a>
          <div className="">
            {!isLoggedIn && <Login doLogin={ this.props.doLogin } />}
            {isLoggedIn && <Logout doLogout={ this.props.doLogout } auth={this.props.auth} />}
          </div>
        </div>
      </nav>
    );
  }
}

NavBar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  doLogin: PropTypes.func.isRequired,
  doLogout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

export default NavBar;
