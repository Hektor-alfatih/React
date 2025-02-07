import { useState } from "react";
import axios from "axios";

const LoginAxios = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [responsData, setResponsData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post("https://fakestoreapi.com/auth/login", {
        username,
        password,
      })
      .then((response) => {
        setResponsData(response.data);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setResponsData(null);
      });
  };

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {responsData && (
        <div>
          <h1>Login Success !!!!!!!!!!!!</h1>
          <h2>Response From Server:</h2>
          <pre>{JSON.stringify(responsData, null, 2)}</pre>
        </div>
      )}

      {error && (
        <div>
          <h2>Error:</h2>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default LoginAxios;