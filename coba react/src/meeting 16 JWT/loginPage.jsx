import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://api.escuelajs.co/api/v1/auth/login", {
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem("authToken", response.data.access_token);
        navigate("/product");
      })
      .catch(() => {
        setError("Login gagal! Silakan periksa email dan password Anda.");
      });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default LoginPage;

const styles = document.createElement('style');
styles.innerHTML = `
  .login-container { display: flex; justify-content: center; align-items: center; height: 100vh; background: linear-gradient(to right, #4facfe, #00f2fe); }
  .login-box { background: white; padding: 20px; border-radius: 8px; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); text-align: center; width: 300px; }
  .login-box h1 { font-size: 24px; margin-bottom: 20px; }
  .login-box label { display: block; text-align: left; margin: 10px 0 5px; font-weight: bold; }
  .login-box input { width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; }
  .login-box button { margin-top: 15px; padding: 10px; width: 100%; background: #4facfe; color: white; border: none; border-radius: 4px; cursor: pointer; }
  .login-box button:hover { background: #00c6ff; }
  .error-message { color: red; margin-top: 10px; }
`;
document.head.appendChild(styles);
