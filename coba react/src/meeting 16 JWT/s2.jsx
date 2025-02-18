import {
    createBrowserRouter,
    RouterProvider,
    Link,
    useParams,
  } from "react-router-dom";
  import ProductDetail from "./productDetail";
  import ProductList from "./itemList";
  import LoginPage from "./loginPage";
  import Protek from "./Protek";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/product",
      element: (
        <Protek>
          <ProductList />
        </Protek>
      ),
    },
    {
      path: "/product/:id",
      element: (
        <Protek>
          <ProductDetail />
        </Protek>
      ),
    },
  ]);
  
  function AxioCard() {
    return <RouterProvider router={router} />;
  }
  
  export default AxioCard;