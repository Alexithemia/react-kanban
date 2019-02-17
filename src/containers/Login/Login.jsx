import React, { Component } from 'react';
import './Login.scss';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleUsernameOnChange = this.handleUsernameOnChange.bind(this);
    this.handlePasswordOnChange = this.handlePasswordOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  };

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  };

  handleUsernameOnChange(e) {
    const value = e.target.value;
    this.setState({ username: value });
  };

  handlePasswordOnChange(e) {
    const value = e.target.value;
    this.setState({ password: value });
  };

  handleSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state;

    this.props.onSend({
      username,
      password
    });

    this.props.closeLogin();
  };

  handleClick = (e) => {
    if (this.node.contains(e.target)) {
      return;
    };
    this.props.closeLogin();
  };

  render() {
    return (
      <div className='loginUser' ref={node => this.node = node}>
        <h3>Login</h3>
        <form className='loginForm'>
          Username:
          <input type="text" data-type="username" onChange={this.handleUsernameOnChange} value={this.state.username} />
          Password:
          <input type="password" data-type="password" onChange={this.handlePasswordOnChange} value={this.state.password} />
          <button onClick={this.handleSubmit}>
            Login
          </button>
        </form>
        <button onClick={this.props.registerUser}>Create account?</button>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {};
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSend: (user) => {
      dispatch(loginUser(user));
    }
  };
};

Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default Login;