import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'bootstrap/dist/css/bootstrap.css';

import NavBar from './Navbar';
import { doLogin, doLogout } from '../actions/index';


class App extends Component {
  render() {
    return (
      <div>
        <NavBar {...this.props} />
      </div>
    );
  }
}

// App.propTypes = {
//   isLoggedIn: PropTypes.is
// };

const mapStateToProps = ({ auth }) => {
  const { isLoggedIn } = auth;
  return {
    isLoggedIn,
    auth
  };
};


const mapDispatchtoProps = dispatch => {
  return bindActionCreators({ doLogin, doLogout }, dispatch);
};

export default connect(mapStateToProps, mapDispatchtoProps)(App);
