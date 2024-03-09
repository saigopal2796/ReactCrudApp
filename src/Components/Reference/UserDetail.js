import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserDetail = ({ user }) => {
  return (
    <div>
      <h2>User Detail</h2>
      <p>Name: {user.name}</p>
      <p>Date of Birth: {user.dob}</p>
      <p>Address: {user.address}</p>
    </div>
  );
};

export default UserDetail;