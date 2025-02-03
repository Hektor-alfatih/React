import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"; 

import './styles.css'; // Pastikan Anda mengimpor file CSS

export default function AxiosStore() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const updateCart = (title, price, change) => {
    setCart((prevCart) => {
      const currentQuantity = prevCart[title]?.quantity || 0;
      const newQuantity = currentQuantity + change;

      if (newQuantity <= 0) {
        const { [title]: _, ...rest } = prevCart;
        return rest;
      }

      return {
        ...prevCart,
        [title]: { price, quantity: newQuantity },
      };
    });
  };

  return (
    <div className="store-container">
      <h1 className="store-title">Shopping Store</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ShoppingCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            src={product.image}
            description={product.description}
            quantity={cart[product.title]?.quantity || 0}
            onUpdate={updateCart}
          />
        ))}
      </div>
    </div>
  );
}

function ShoppingCard({
  id,
  title,
  price,
  src,
  description,
  quantity,
  onUpdate,
}) {
  return (
    <div className="shopping-card">
      <Link to={`/${id}`} className="product-link">
        <img
          src={src}
          alt={title}
          className="product-image"
        />
        <div className="product-info">
          <h2 className="product-title">{title}</h2>
          <p className="product-price">Harga: Rp.{price}</p>
          <p className="product-quantity">Quantity: {quantity}</p>
          <p className="product-total">Total: Rp.{quantity * price}</p>
        </div>
      </Link>

      <div className="product-button-container">
        <button
          className="product-button add"
          onClick={() => onUpdate(title, price, 1)}
        >
          Tambah
        </button>
        <button
          className="product-button remove"
          onClick={() => onUpdate(title, price, -1)}
        >
          Kurang
        </button>
      </div>
    </div>
  );
}

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => console.error("Error fetching product detail:", error));
  }, [id]);

  if (!product) {
    return (
      <p className="text-center text-gray-500 mt-4">
        Loading product details...
      </p>
    );
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail-box">
        <div className="product-detail-image">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
        </div>
        <div className="product-detail-info">
          <h1 className="product-detail-title">{product.title}</h1>
          <p className="product-detail-price">Rp. {product.price}</p>
          <p className="product-detail-description">{product.description}</p>
          <p className="product-detail-category">Kategori: {product.category}</p>
          <p className="product-detail-rating">Rating: 4.5/5 (146 reviews)</p>

          <div className="size-selector">
            <p>Select Size:</p>
            <div>
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button key={size}>{size}</button>
              ))}
            </div>
          </div>

          <div className="product-action-buttons">
            <button
              onClick={() => navigate("/")}
              className="product-action-button back"
            >
              Back to Home
            </button>
            <button className="product-action-button add-to-bag">
              Add to Bag
            </button>
          </div>

          <p className="footer">Free shipping on all continental US orders.</p>
        </div>
      </div>
    </div>
  );
}
