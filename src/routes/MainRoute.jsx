import Contact from "../pages/Contact";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import Offers from "../pages/Offers";
import Product from "../pages/Product";
import Products from "../pages/Products";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";
import Payment from "../pages/Payment";
import Cart from "../pages/Cart";
import Settings from "../pages/Settings";
import Reviews from "../pages/Reviews";
import OrderHistory from "../pages/OrderHistory";

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
    path: "/sign-in",
    component: <SignIn />,
  },
  {
    path: "/sign-up",
    component: <SignUp />,
  },
  {
    path: "/forgot-password",
    component: <ForgotPassword/>
  },
  {
    path: "/Payment",
    component: <Payment />
  },
  {
    path: "/Cart",
    component: <Cart />
  },
  {
    path: "/Settings",
    component: <Settings />
  },
  {
    path: "/Reviews",
    component: <Reviews />
  },
  {
    path: "/OrderHistory",
    component: <OrderHistory />
  },
];
export default routes;