import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ShoppingCard from "./ShoppingCard";
import "./styles.css";

export default function Product() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      alert("Akses Ditolak: Silakan Login Terlebih Dahulu");
      navigate("/login");
      return;
    }

    axios
      .get("https://fakestoreapi.com/products", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setProducts(response.data))
      .catch(() => {
        alert("Token Tidak Valid, Silakan Login Ulang");
        localStorage.removeItem("authToken");
        navigate("/login");
      });
  }, [navigate]);

  return (
    <div className="store-container">
      <header>
        <h1>Shopping Store</h1>
        <button onClick={() => {
          localStorage.removeItem("authToken");
          navigate("/login");
        }}>
          Logout
        </button>
      </header>

      <div className="product-grid">
        {products.map((product) => (
          <ShoppingCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
