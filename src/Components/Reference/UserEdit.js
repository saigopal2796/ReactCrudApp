import React from 'react';
import InputForm from './InputForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserEdit = ({ user, updateUser }) => {
  return (
    <div>
      <h2>Edit User</h2>
      <InputForm initialData={user} updateUser={updateUser} />
    </div>
  );
};

export default UserEdit;