import { Link } from "react-router-dom";
import "./styles.css";

export default function ShoppingCard({ product }) {
  return (
    <div className="shopping-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <img src={product.image} alt={product.title} className="product-image" />
        <div className="product-info">
          <h2>{product.title}</h2>
          <p>Harga: Rp.{product.price}</p>
        </div>
      </Link>
    </div>
  );
}
