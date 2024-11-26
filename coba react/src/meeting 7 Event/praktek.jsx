import React from "react";

// const App = () => {
//     const handleClick = () => {
//         console.log("Button clicked!");
//     };

//     return (
//         <div>
//             <button onClick={handleClick}>Click me</button>
//         </div>
//     );
// };

// export default App;




// const showalert = () => {
//     const handleClick = () => {
//         alert("Button clicked!");
//     };

//     return (
//         <div>
//             <button onClick={handleClick}>Show massage</button>
//         </div>
//     );
// };

// export default showalert;



// const eventprogrationexample = () => {
//     const handleClick = (event) => {
//         event.stopPropagation();
//         alert("Button clicked!");
//     };

//     return (
//         <div onClick={() => alert("Parent div clicked!")} style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
//             <button onClick={handleClick}>Click me</button>
//         </div>
//     );
// };

// export default eventprogrationexample;



const preventDefaultExample = () => {
    const handleClick = (event) => {
        event.preventDefault();
        alert("Form submitted!");
    };

    return (
        <form onSubmit={handleClick}>
            <button type="submit">Submit</button>
        </form>
    );
};

export default preventDefaultExample;