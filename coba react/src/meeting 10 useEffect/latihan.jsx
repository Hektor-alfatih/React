import  {useState, useEffect} from "react";


export default function TanpaDependency() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`count saat ini: ${count}`);
    });

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Tambah</button>
        </div>
    );
}



export default function MenggunakanDependency() {

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

    
    