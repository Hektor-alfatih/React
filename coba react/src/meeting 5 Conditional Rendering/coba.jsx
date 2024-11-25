import React from "react";

function coba() {
    
    const number = 5;

    let result;
    if (number > 3) {
        result = 'Greater than 3';
    } else {
        result = 'Less than 3';
    };

    const ternaryresult = number > 3 ? 'Greater than 3' : 'Less than 3';

    const andresult = number > 3 && 'Greater than 3';

    return (
        <div>
            <h1>{result}</h1>
            <h1>{ternaryresult}</h1>
            <h1>{andresult}</h1>
        </div>
    )

}

export default coba