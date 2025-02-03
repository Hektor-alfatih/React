import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AxiosStore from "./toko";
import { ProductDetail } from "./toko";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AxiosStore />,
  },
  {
    path: "/:id",
    element: <ProductDetail />,
  },
]);

function Axioshop() {
  return <RouterProvider router={router} />;
}

export default Axioshop;