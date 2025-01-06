import { useState } from "react";


function Latihan() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    const handleClick = () => {
      setCount(count + 1);
    }
    return (
      <button onClick={handleClick}>Count = {count}</button>
    );
  }
  export default Latihan