import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login";
import Product from "./Product";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Product />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}
