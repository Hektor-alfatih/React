// Latihan 1


// function Parent() {
//         return <Child message="Hello from Parent" />;
//     }
    
//     function Child({ message }) {
//         return <h1>{message}</h1>;
//     }
    
//     export default Parent

  

    // Latihan 2

    // function Parent() {
    //     const user = {
    //         name: 'John Doe',
    //         age: 30,
    //     }
    //     return <Child {...user} />;
    // }

    // function Child({ name, age }) {
    //     return (
    //         <div>
    //             <h1>Nama : {name}</h1>
    //             <h1>Umur : {age}</h1>
    //         </div>
    //     );
    // }

    // export default Parent


    // Latihan 3

    // function Parent() {
    //     return (
    //         <child>
    //             <p>This is passed as children</p>
    //         </child>
    //     )
    // }

    // function Child({ children }) {
    //     return <h1>{children}</h1>
    // }

    // export default Parent


    // Praktek 1

//     // Greeting Component
// const Greeting = ({ name, message }) => {
//     return (
//       <div>
//         <h1>Hello, {name}!</h1>
//         <p>{message}</p>
//       </div>
//     );
//   };
  
//   // App Component
//   const App = () => {
//     return (
//       <div>
//         <Greeting name="Alice" message="Welcome to React!" />
//       </div>
//     );
//   };
  
//   export default App;


// Praktek 2


const UserProfile = ({ username, age, location }) => {
    return (
      <div>
        <h2>Username: {username}</h2>
        <p>Age: {age}</p>
        <p>Location: {location}</p>
      </div>
    );
  };
  

  const App = () => {
    const userInfo = {
      username: "johndoe",
      age: 25,
      location: "New York"
    };
  
    return (
      <div>
        <UserProfile {...userInfo} />
      </div>
    );
  };
  
  export default App;
  


  