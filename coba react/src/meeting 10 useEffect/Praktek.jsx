import  {useState, useEffect} from "react";

// const Counter = () => {

//     const [count, setCount] = useState(0)

//     useEffect(() => {
//         console.log("Efek dijalankan")
//     })

//     const handleAdd = () => {
//         setCount(count + 1)
//     }

//     return (
//         <div style={styles.container}>
//           <h1>Counter: {count}</h1>
//           <button onClick={handleAdd} style={styles.button}>
//             Tambah
//           </button>
//         </div>
//       );
//     };
    
//     const styles = {
//       container: {
//         textAlign: "center",
//         marginTop: "50px",
//       },
//       button: {
//         padding: "10px 20px",
//         fontSize: "16px",
//         backgroundColor: "#007BFF",
//         color: "#fff",
//         border: "none",
//         borderRadius: "5px",
//         cursor: "pointer",
//       },
//     };

// export default Counter


function Counter() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("Efek dijalankan")
    })

    const handleAdd = () => {
        setCount(count + 1)
    }

    return (
        <div style={styles.container}>
          <h1>Counter: {count}</h1>
          <button onClick={handleAdd} style={styles.button}>
            Tambah
          </button>
        </div>
      );
    };
    
    const styles = {
      container: {
        textAlign: "center",
        marginTop: "50px",
      },
      button: {
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: "#007BFF",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      },
    };

export default Counter