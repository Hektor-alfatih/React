import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [id]);

  if (!product) return <div className="loading">Loading...</div>;

  return (
    <div className="product-detail-container">
      <div className="product-detail-box">
        <img src={product.image} alt={product.title} className="product-image" />
        <div className="product-info">
          <h2>{product.title}</h2>
          <p className="price">${product.price}</p>
          <button className="buy-now">Buy now</button>
          <button className="add-to-bag">Add to bag</button>
        </div>
      </div>
    </div>
  );
};

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
  .product-detail-container { display: flex; justify-content: center; align-items: center; height: 100vh; background: #f5f5f5; }
  .product-detail-box { display: flex; background: white; padding: 20px; border-radius: 8px; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); }
  .product-image { width: 200px; height: auto; border-radius: 8px; }
  .product-info { margin-left: 20px; }
  .product-info h2 { font-size: 24px; margin-bottom: 10px; }
  .price { font-size: 20px; color: green; font-weight: bold; }
  .buy-now, .add-to-bag { margin-top: 10px; padding: 10px; border: none; border-radius: 4px; cursor: pointer; }
  .buy-now { background: black; color: white; }
  .add-to-bag { background: gray; color: white; }
  .loading { text-align: center; font-size: 18px; color: gray; }
`;
document.head.appendChild(styles);
