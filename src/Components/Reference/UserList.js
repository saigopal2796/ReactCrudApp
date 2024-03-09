import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import '../Styles/container.css'

const UserList = ({ users, viewUser, editUser, deleteUser }) => {



  return (
    <div>
      <h2>User List</h2>
<div class="usertable">
  <div class="row">
    <div class="col-12">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>
            <button type="button" class="btn btn-secondary" onClick={() => viewUser(user)}>View</button>
            <button type="button" class="btn btn-secondary" onClick={() => editUser(user)}>Edit</button>
            <button type="button" class="btn btn-secondary" onClick={() => deleteUser(user.id)}>Delete</button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>
         
    </div>
  );
};

export default UserList;