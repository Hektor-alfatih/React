import { useState } from "react";


// Praktek 1
// function Counter() {
//     const [count, setCount] = useState(0)   

//     const handleClick = () => {
//         setCount(count + 1)
//     }
//     const handleClick2 = () => {
//         setCount(count - 1)
//     }
//     const handleClick3 = () => {
//         setCount(0)
//     }
//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={handleClick}>+</button>
//             <button onClick={handleClick2}>-</button>
//             <button onClick={handleClick3}>Reset</button>
//         </div>
//     )
// }

// export default Counter




// Praktek 2

// function LoginStatus() {
//     const [isLoggedIn, setIsLoggedIn] = useState(false)

//     const handleClick = () => {
//         setIsLoggedIn(!isLoggedIn)  
//     }

//     return (
//         <div>
//             {isLoggedIn ? <h1>Selamat Datang</h1> : <h1>Silahkan login terlebih dahulu</h1>}
//             <button onClick={handleClick}>{isLoggedIn ? "Logout" : "Login"}</button>
//         </div>
//     )
// }

// export default LoginStatus






// Praktek 3

function SimpleCalculator() {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [result, setResult] = useState(0)

    const handleClick = () => {
        setResult(num1 + num2)
    }
    const handleClick2 = () => {
        setResult(num1 - num2)
    }
    const handleClick3 = () => {
        setResult(num1 * num2)
    }


    const handleDivision = () => {
        if (num2 !== 0) {
            setResult(num1 / num2)
        } else {
            setResult("Cannot divide by zero")
        }
    }

    return (
        <div>
            <input type="number" value={num1} onChange={(e) => setNum1(parseFloat(e.target.value))} />
            <input type="number" value={num2} onChange={(e) => setNum2(parseFloat(e.target.value))} />
            <button onClick={handleClick}>+</button>
            <button onClick={handleClick2}>-</button>
            <button onClick={handleClick3}>*</button>
            <button onClick={handleDivision}>/</button>
            <p>Hasil: {result}</p>
        </div>
    )
    }

    export default SimpleCalculator

  