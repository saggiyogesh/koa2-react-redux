import React, { Component, PropTypes } from 'react';

class Logout extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    this.props.doLogout();
  }

  render() {
    const { user } = this.props.auth;
    return (
      <div>
        Welcome {user.email},
        <a href="#" onClick={ this.onClick }>Logout</a>
      </div>
    );
  }
}

Logout.propTypes = {
  doLogout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
//
// const mapStateToProps = ({ auth }) => {
//   return {
//     user: auth.user
//   };
// };
//
// const mapDispatchtoProps = (dispatch) => {
//   return bindActionCreators({ doLogout }, dispatch);
// };

export default Logout;
