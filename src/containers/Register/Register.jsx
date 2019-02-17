import React, { Component } from 'react';
import './Register.scss';
import { connect } from 'react-redux';
import { registerUser } from '../../actions';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      username: '',
      password: ''
    };

    this.handleFirstNameOnChange = this.handleFirstNameOnChange.bind(this);
    this.handleLastNameOnChange = this.handleLastNameOnChange.bind(this);
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

  handleFirstNameOnChange(e) {
    const value = e.target.value;
    this.setState({ first_name: value });
  };

  handleLastNameOnChange(e) {
    const value = e.target.value;
    this.setState({ last_name: value });
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
    const { first_name, last_name, username, password } = this.state;

    this.props.onSend({
      first_name,
      last_name,
      username,
      password
    });

    this.props.closeRegister();
  };

  handleClick = (e) => {
    if (this.node.contains(e.target)) {
      return;
    };
    this.props.closeRegister();
  };

  render() {
    return (
      <div className='addUser' ref={node => this.node = node}>
        <h3>Add Card</h3>
        <form className='registerForm'>
          First Name:
          <input type="text" data-type="first_name" onChange={this.handleFirstNameOnChange} value={this.state.first_name} />
          Last Name:
          <input type="text" data-type="last_name" onChange={this.handleLastNameOnChange} value={this.state.last_name} />
          Username:
          <input type="text" data-type="username" onChange={this.handleUsernameOnChange} value={this.state.username} />
          Password:
          <input type="text" data-type="password" onChange={this.handlePasswordOnChange} value={this.state.password} />
          <button onClick={this.handleSubmit}>
            Register
          </button>
        </form>
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
      dispatch(registerUser(user));
    }
  };
};

Register = connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);

export default Register;