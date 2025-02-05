import { createBrowserRouter } from "react-router-dom";
import MainLaoutes from "../Layouts/MainLaoutes";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import ProductCard from "../Components/ProductCard";
import ProductDetails from "../Pages/ProductDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLaoutes></MainLaoutes>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../public/category.json"),
        children: [
          {
            path: "/",
            element: <ProductCard></ProductCard>,
            loader: () => fetch("../../public/categories.json")
          },
          {
            path: "/category/:category",
            element: <ProductCard></ProductCard>,
            loader: () => fetch("../../public/categories.json")
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ()=>fetch('../../public/categories.json')
      },
    ],
  },
]);
export { routes };
