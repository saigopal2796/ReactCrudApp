import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../Common/Loader";
import "./User.css";
const EditUser = () => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const getUserApi = "http://localhost:8082/getUserById";
  const editUserApi = "http://localhost:8082/updateUserById";

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

  const handelInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(name, value);
    setUser({ ...user, [name]: value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    fetch(editUserApi.concat("/") + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setIsLoading(true);
        navigate("/show-user");
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      })
  };

  return (
    <div className="user-form">
      <div className="heading">
      {isLoading && <Loader />}
      {error && <p>Error: {error}</p>}
        <p>Edit Form</p>
      </div>
      <form onSubmit={handelSubmit}>
        <div className="mb-3">
          <label for="name" className="form-label">
            NAME
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={user.name}
            onChange={handelInput}
          />
        </div>
        <div className="mb-3 mt-3">
          <label for="dob" className="form-label">
            DATE-OF-BIRTH
          </label>
          <input
             type="text"
            className="form-control"
            id="dob"
            name="dob"
            value={user.dob}
            onChange={handelInput}
          />
        </div>
        <div className="mb-3">
          <label for="pwd" className="form-label">
            ADDRESS
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={user.address}
            onChange={handelInput}
          />
        </div>
        <button type="submit" className="btn btn-secondary submit-btn">
          EDIT
        </button>
      </form>
    </div>
  );
};
export default EditUser;