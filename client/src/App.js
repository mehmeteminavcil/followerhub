import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SingleLinks from "./pages/SingleLinks/SingleLinks";
import SingleCarts from "./pages/SingleCarts/SingleCarts";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/:id", element: <SingleLinks /> },
      { path: "/:id/:id", element: <SingleCarts /> },
      { path: "/products/:id", element: <Product /> },
      { path: "/product/:id", element: <Products /> },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
