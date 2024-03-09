import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const InputForm = ({ addUser, updateUser, initialData }) => {
  const [formData, setFormData] = useState(initialData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.id) {
      updateUser(formData);
    } else {
      addUser(formData);
    }
    setFormData({ id: '', name: '', dob: '', address: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
        <div class="form-group">
        <label for="formGroupExampleInput" class="form-label">Name:</label >
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Name" value={formData.name} onChange={handleInputChange} />
        </div>

        <div class="form-group">
        <label for="formGroupExampleInput" class="form-label">Date of Birth:</label >
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Date of Birth" value={formData.dob} onChange={handleInputChange} />
        </div>

        <div class="form-group">
        <label for="formGroupExampleInput" class="form-label"> Address:</label >
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder=" Address" value={formData.address} onChange={handleInputChange} />
        </div>
        <div>
      <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  );
};

export default InputForm;