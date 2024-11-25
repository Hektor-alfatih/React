// MAP

// const numbers = [1, 2, 3, 4, 5];
// const SquaredList = () => (
//   <ul>
//     {numbers.map((num) => (
//       <li key={num}>{num ** 2}</li>
//     ))}
//   </ul>
// );

// export default SquaredList;



// FILTER

const numbers = [1, 2, 3, 4, 5];
const EvenNumbersList = () => (
  <ul>
    {numbers.filter((num) => num % 2 === 0) 
            .map((num) => (
              <li key={num}>{num}</li> 
            ))}
  </ul>
);

export default EvenNumbersList;




