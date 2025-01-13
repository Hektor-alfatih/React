import  {useState, useEffect} from "react";

export default function Latihan() {

        const [count, setCount] = useState(0);

        useEffect(() => {
            console.log(`count saat ini: ${count}`);
        }, [count]);

        return (
            <div>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Tambah</button>
            </div>
        );
    }

    
    