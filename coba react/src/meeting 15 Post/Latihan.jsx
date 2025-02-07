import { useState } from "react";
import axios from "axios";

const SimpleUserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState(null); // Inisialisasi dengan null
  const [error, setError] = useState(null); // Inisialisasi dengan null

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        name,
        email,
      })
      .then((result) => {
        setResponse(result.data); // Menyimpan data respons
      })
      .catch((error) => {
        setError(error.message); // Menyimpan pesan error
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {/* Menampilkan Response */}
      {response && (
        <div>
          <h3>Response: {JSON.stringify(response)}</h3>
        </div>
      )}

      {/* Menampilkan Error */}
      {error && (
        <div>
          <h3>Error: {error}</h3>
        </div>
      )}
    </div>
  );
};

export default SimpleUserForm;
