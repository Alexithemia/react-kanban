import React from 'react';
import './Header.scss'

const Header = (props) => {
  const { title, show, login } = props;
  return (
    <header>
      <div className="title">{title}</div>
      <div className="loginBtn" onClick={login}>Login</div>
      <div className="addBtn" onClick={show}>Add Card</div>
    </header>
  );
};

export default Header;