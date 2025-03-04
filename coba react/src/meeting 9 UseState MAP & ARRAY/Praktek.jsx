import React, { useState } from "react";

const products = [
  { id: "A", name: "Produk A", price: 20000, image: "https://via.placeholder.com/150" },
  { id: "B", name: "Produk B", price: 30000, image: "https://via.placeholder.com/150" },
  { id: "C", name: "Produk C", price: 50000, image: "https://via.placeholder.com/150" },
];

const Card = ({ product }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => setQuantity(quantity + 1);
  const handleSubtract = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h2 style={styles.title}>{product.name}</h2>
      <p>Harga: Rp {product.price.toLocaleString()}</p>
      <div style={styles.buttons}>
        <button onClick={handleSubtract} style={styles.button}>
          Kurang
        </button>
        <p style={styles.quantity}>{quantity}</p>
        <button onClick={handleAdd} style={styles.button}>
          Tambah
        </button>
      </div>
      <p>Total: Rp {(quantity * product.price).toLocaleString()}</p>
    </div>
  );
};

const App = () => {
  return (
    <div style={styles.container}>
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "20px",
    flexWrap: "wrap",
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    width: "200px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    marginBottom: "12px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "8px",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "12px",
  },
  button: {
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  quantity: {
    fontSize: "16px",
    fontWeight: "bold",
  },
};

export default App;
