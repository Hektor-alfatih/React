import React from "react";


// If conditional
// function test ({name, benar}) {
//     if (benar) {
//         return <li>{name} true</li>
//     } else {
//         return <li>{name} false</li>
//     }
// }

// export default function conditional () {
//   return (
//     <div>
//         <ul>
//       <test name="A" benar={true} />
//       <test name="B" benar={false} />
//       </ul>
//     </div>
//   );
// }





// Ternary Operator
// function test ({name, benar}) {
//   return benar ? <li>{name} true</li> : <li>{name} false</li>
// }

// export default function conditional () {
//   return (
//     <div>
//         <ul>
//       <test name="A" benar={true} />
//       <test name="B" benar={false} />
//       </ul>
//     </div>
//   );
// }


// Logical And

function test ({name, benar, isChecklist}) {
  return (benar && isChecklist) ? <li>{name} ✅</li> : <li>{name} ❌</li>
}

export default function conditional () {
  return (
    <div>
        <ul>
      <test name="A" benar={true} isChecklist={true} />
      <test name="B" benar={false} isChecklist={false} />
      </ul>
    </div>
  );
}

