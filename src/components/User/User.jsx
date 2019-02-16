import React from 'react';

const User = (props) => {
  const { id, first_name, last_name } = props;
  return (
    <option value={id} >{first_name} {last_name}</option>
  );
};

export default User;