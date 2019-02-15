import React from 'react';
import User from '../User'

const UserList = (props) => {
  const userList = props.users.map((user) => {
    return (
      <User key={user.id}
        id={user.id}
        first_name={user.first_name}
        last_name={user.last_name}
        assigned={props.assigned}
      />);
  });

  return (
    <>
      {userList}
    </>
  )
}

export default UserList;