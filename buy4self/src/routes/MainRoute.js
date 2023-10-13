import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Offers from "../pages/Offers";
import Product from "../pages/Product";
import Products from "../pages/Products";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";

const routes = [
  {
    path: "/",
    component: <Home />,
  },

  {
    path: "/products",
    component: <Products />,
  },
  {
    path: "/product/:id",
    component: <Product />,
  },
  {
    path: "/offers",
    component: <Offers />,
  },
  {
    path: "/contact",
    component: <Contact />,
  },
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "/register",
    component: <Register />,
  },
  {
    path: "/forgot-password",
    component: <ForgotPassword/>
  },
];
export default routes;