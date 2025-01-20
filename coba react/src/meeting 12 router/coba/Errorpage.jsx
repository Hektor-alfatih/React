import { Link } from "react-router-dom";

function ErrorPages() {
    return (
        <>
            <h1 className="text-3xl font-bold underline">404 Not Found</h1>
            <p>Halaman tidak ditemukan</p>
            <Link to="/">Kembali ke halaman utama</Link>
        </>
    );
}

export default ErrorPages;
