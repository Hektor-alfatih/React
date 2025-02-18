import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ProductList() {
  const [posts, setPosts] = useState([]);
  const [userProfile, setUserProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/");
    }
    axios
      .get("https://api.escuelajs.co/api/v1/auth/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setUserProfile(response.data.name);
      })
      .catch(() => {
        navigate("/");
      });
  }, [navigate]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const productsWithCount = response.data.map((product) => ({
          ...product,
          count: 0,
        }));
        setPosts(productsWithCount);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const addProduct = (id) => {
    setPosts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, count: product.count + 1 } : product
      )
    );
  };

  const reduceProduct = (id) => {
    setPosts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.count > 0
          ? { ...product, count: product.count - 1 }
          : product
      )
    );
  };

  const formatDollar = (angka) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(angka);
  };

  const calculateTotal = (price, count) => {
    return price * count;
  };

  const calculateGrandTotal = () => {
    return posts.reduce((total, product) => {
      return total + calculateTotal(product.price, product.count);
    }, 0);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Hello, {userProfile}</h1>
        <button onClick={handleLogout} className="logout-button">LogOut</button>
      </div>
      <div className="product-grid">
        {posts.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.title} className="product-image" />
            </Link>
            <h3>{product.title}</h3>
            <p>Harga: {formatDollar(product.price)}</p>
            <div className="product-controls">
              <button onClick={() => reduceProduct(product.id)} className="button minus">Kurang</button>
              <span>{product.count}</span>
              <button onClick={() => addProduct(product.id)} className="button plus">Tambah</button>
            </div>
          </div>
        ))}
      </div>
      <div className="summary">
        <h2>Rincian Total Harga:</h2>
        {posts.filter((product) => product.count > 0).map((product) => (
          <p key={product.id}>
            {product.title} x {product.count} = {formatDollar(calculateTotal(product.price, product.count))}
          </p>
        ))}
        <hr />
        {posts.some((product) => product.count > 0) ? (
          <p>Total Keseluruhan: {formatDollar(calculateGrandTotal())}</p>
        ) : (
          <p>Belum ada barang yang ditambahkan.</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;

// CSS Vanilla
const styles = document.createElement('style');
styles.innerHTML = `
  .container { text-align: center; padding: 20px; }
  .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
  .logout-button { background: red; color: white; padding: 10px; border: none; cursor: pointer; }
  .product-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; }
  .product-card { border: 1px solid #ccc; padding: 10px; text-align: center; }
  .product-image { max-width: 100%; height: auto; cursor: pointer; }
  .product-controls { display: flex; justify-content: center; align-items: center; gap: 10px; margin-top: 10px; }
  .button { padding: 5px 10px; border: none; cursor: pointer; }
  .minus { background: red; color: white; }
  .plus { background: green; color: white; }
  .summary { margin-top: 20px; padding: 20px; border: 1px solid #ccc; }
`;
document.head.appendChild(styles);
