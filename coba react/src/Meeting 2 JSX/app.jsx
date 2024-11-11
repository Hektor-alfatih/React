 // Latihan 1

// function Testing() {
//     return (
//         <div>
//             <h1>hello</h1>
//             <p>Ini Meeting 2</p>
//         </div>
//     );
// }

// export default Testing


// Latihan 2

// export default function Bio() {
//     return (
//       <div className="intro">
//         <h1>Welcome to my website!</h1>
//         <p className="summary">
//           You can find my thoughts here.
//           <br /><br />
//           <b>And <i>pictures</i></b> of scientists!
//         </p>
//       </div>
//     );
//   }
  
  
  // Latihan 3

//   export default function App() {
//     return (
//       <div style={{textAlign: "center", color: "green"}}>
//         <h1>hello</h1>
//         <p>Ini Meeting 2</p>
//       </div>                
//     )
//   }


  // Latihan 4

  const person = {
    name: "John Doe",
    age: 30
  };

  export default function App() {
    return (
      <div>
        <h1>hello</h1>
        <p>Ini Meeting 2</p>
        <p>{person.name}</p>
        <p>{person.age}</p>
      </div>
    )
  }