import React from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

function CobaRouter() {
    return (
        <div>
            <h2>Halaman Utama</h2>
            <Link to="/second">Pergi ke Halaman Kedua</Link>
        </div>
    );
}

function SecondPlace() {
    return (
        <div>
            <h2>Halaman Kedua</h2>
            <Link to="/">Kembali ke Halaman Utama</Link>
        </div>
    );
}

function ErrorPages() {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">404 Not Found</h1>
            <p>Halaman tidak ditemukan</p>
            <Link to="/">Kembali ke Halaman Utama</Link>
        </div>
    );
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <CobaRouter />,
        errorElement: <ErrorPages />,
    },
    {
        path: '/second',
        element: <SecondPlace />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
