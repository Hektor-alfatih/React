import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import CobaRouter from "./page1";
import ErrorPages from "./Errorpage";
import SecondPlace from "./page2";

const router = createBrowserRouter([
    {
        path: "/",
        element: <CobaRouter />,
        errorElement: <ErrorPages />,
    },
    {
        path: "/second-place",
        element: <SecondPlace />,
    },
]);

export default function App() {
    return <RouterProvider router={router} />
    }