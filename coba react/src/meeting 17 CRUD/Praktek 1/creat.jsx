import React, { useState } from "react";
import axios from "axios";

const CreateUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer", // default role
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
    const newUser = {
      ...formData,
      creationAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    axios
      .post("https://api.escuelajs.co/api/v1/users/", newUser)
      .then((response) => {
        setMessage(`User created: ${response.data.name}`);
        setFormData({
          name: "",
          email: "",
          password: "",
          role: "customer",
        });
      })
      .catch((error) => setMessage(`Error: ${error.message}`));
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Create User</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter name"
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
            />
          </div>

          <button type="submit" className="submit-btn">Create User</button>
        </form>

        {message && <p className={`message ${message.includes("Error") ? "error" : "success"}`}>{message}</p>}
      </div>
    </div>
  );
};

export default CreateUser;

// CSS Styles
const styles = document.createElement("style");
styles.innerHTML = `
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right, #4f46e5, #9333ea);
    padding: 20px;
  }
  .form-box {
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
    text-align: center;
  }
  .form-box h2 {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
  }
  .input-group {
    margin-bottom: 15px;
    text-align: left;
  }
  .input-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    color: #555;
  }
  .input-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
  .submit-btn {
    width: 100%;
    padding: 10px;
    background: #4f46e5;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s;
  }
  .submit-btn:hover {
    background: #4338ca;
  }
  .message {
    margin-top: 15px;
    font-weight: bold;
  }
  .error {
    color: red;
  }
  .success {
    color: green;
  }
`;
document.head.appendChild(styles);
