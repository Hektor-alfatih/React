import { Navigate } from "react-router-dom";

const Protek = ({ children }) => {
  const token = localStorage.getItem("authToken");
  return token ? children : <Navigate to="/" />;
};

export default Protek;