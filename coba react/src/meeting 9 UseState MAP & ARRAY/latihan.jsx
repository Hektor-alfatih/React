import { useState } from "react";

function Latihan() {
    const [users, setUsers] = useState(["alice", "bob"]);

    return (
        <div>
        <h2>Daftar nama :</h2>
        <ul>
            {users.map((user, index) => (
            <li key={index}>{user}</li>
            ))}
        </ul>
        <button onClick={() => setUsers([...users, "charlie"])}>Tambah Nama</button>
        </div>
    )
}

export default Latihan