import axios from "axios";
import { use } from "react";

function Axios() {
    const [posts, setposts] = useState([]);

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((res) => {
                setposts(res.data);
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
            }, []);
            
    }, [posts]);

    return (
        <div>
            <ul>
                {posts.map((products) => (
                    <li key={products.id}>
                        {products.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}