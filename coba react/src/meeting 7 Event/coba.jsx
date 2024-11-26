import React from "react";

// function App() {
//     const handleClick = () => {
//         alert("Button clicked!");
//     };

//     return (
//         <div>
//             <button onClick={handleClick}>Click me</button>
//         </div>
//     );
// }

// export default App;



function MyForm() {
  const handleSubmit = (event) => {
    event.preventDefault(); // Mencegah reload halaman
    alert('Form disubmit!');
  };

  const handleDivClick = (event) => {
    event.stopPropagation(); // Menghentikan propagasi event ke parent
    alert('Div diklik!');
  };

  return (
    <div onClick={() => alert('Parent div diklik!')}>
      <form onSubmit={handleSubmit}>
        <div onClick={handleDivClick}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default MyForm;
