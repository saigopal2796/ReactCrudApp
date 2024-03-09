import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const EditUser = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();
  const getUserApi = "http://localhost:8082/getUserById";

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios
      .get(getUserApi.concat("/") + id)
      .then((item) => {
        setUser(item.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="user mt-5">
      <table className="table table-bordered">
    <thead>
      <tr>
        <th>ATTRIBUTE</th>
        <th>VALUE</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>NAME</td>
        <td>{user.name}</td>
      </tr>
      <tr>
        <td>DATE-OF-BIRTH</td>
        <td>{user.dob}</td>
      </tr>
      <tr>
        <td>ADDRESS</td>
        <td>{user.address}</td>
      </tr>
    </tbody>
  </table>
    </div>
  );
};
export default EditUser;
