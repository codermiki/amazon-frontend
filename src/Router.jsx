import { createBrowserRouter } from "react-router-dom";
import ProtectRoute from "./components/ProtectRoute/ProtectRoute";
import Layout from "./components/Layout/Layout";
import Landing from "./pages/Landing/Landing";
import Auth from "./pages/Auth/Auth";
import Cart from "./pages/Cart/Cart";
import Payment from "./pages/Payment/Payment";
import Orders from "./pages/Orders/Orders";
import Results from "./pages/Results/Results";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Four04 from "./pages/Four04/Four04";
const stripePromise = loadStripe(
  "pk_test_51QPtlTDFnHQJJAEaktKKpDZA1ciNNLJ2oO101dza1Q4sfGZxtceQY8oGCc9MOuK4N1CO0OKet1bO8CPJ3nKKkmIn008pkqjmSp"
);

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/payment",
        element: (
          <ProtectRoute msg={"you must log in to pay"} redirect={"/payment"}>
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          </ProtectRoute>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/orders",
        element: (
          <ProtectRoute
            msg={"you must log in to see your order"}
            redirect={"/orders"}
          >
            <Orders />
          </ProtectRoute>
        ),
      },
      {
        path: "/category/:categoryName",
        element: <Results />,
      },
      {
        path: "/products/:productId",
        element: <ProductDetail />,
      },
      {
        path: "/category/electronics/products/:productId",
        element: <ProductDetail />,
      },
      {
        path: "/category/jewelery/products/:productId",
        element: <ProductDetail />,
      },
      {
        path: "/category/men's clothing/products/:productId",
        element: <ProductDetail />,
      },
      {
        path: "/category/women's clothing/products/:productId",
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "*",
    element: <Four04 />,
  },
]);
