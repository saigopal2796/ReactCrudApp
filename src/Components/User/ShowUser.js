import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../Common/Loader";
import "./User.css";

const ShowUser = () => {
  const showUserApi = "http://localhost:8082/getUsers";
  const deleteUserApi = "http://localhost:8082/deleteUserById";

  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async (id) => {
    console.log("id : -", id);
    setIsLoading(true);
    try {
      const response = await fetch(deleteUserApi.concat("/") + id, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete item");
      }
      setUser(user.filter((item) => item.id !== id));
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios
      .get(showUserApi)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (user.length < 0) {
    return <h1>no user found</h1>;
  } else {
    return (
      <div className="mt-5">
        {isLoading && <Loader />}
        {error && <p>Error: {error}</p>}
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>DATE-OF-BIRTH</th>
              <th>ADDRESS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {user?.map((item, i) => {
              return (
                <tr key={i + 1}>
                  <td>{i + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.dob}</td>
                  <td>{item.address}</td>
                  <td>
                    <Link to={`/user/${item.id}`}>
                      <i class="btn btn-success">VIEW</i>
                    </Link>
                    <Link to={`/edit-user/${item.id}`}>
                      <i class="btn btn-primary">EDIT</i>
                    </Link>
                    <i class="btn btn-danger" onClick={() => handleDelete(item.id)}>DELETE</i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
};

export default ShowUser;