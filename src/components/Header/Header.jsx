import React, { Component } from 'react';
import './Header.scss';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions';

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  };

  handleLogout() {
    this.props.onLogout();
  };

  render() {
    const { title, show, login, loggedIn } = this.props;
    return (
      <header>
        <div className="title">{title}</div>
        {loggedIn ? null : <div className="loginBtn" onClick={login}>Login</div>}
        {loggedIn ? <div className="addBtn" onClick={show}>Add Card</div> : null}
        {loggedIn ? <div className="addBtn" onClick={this.handleLogout}>Logout</div> : null}
      </header>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => {
      dispatch(logoutUser());
    }
  };
};

Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default Header;