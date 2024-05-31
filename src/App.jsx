import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { CartProvider } from "./context/CartDropdownContext";
import routes from "./routes/MainRoute";

function App() {
  return (
    <div>
      <CartProvider>
        <Header />
        <BrowserRouter>
          <Routes>
            {routes.map((route) => (
              <Route
                key={crypto.randomUUID()}
                path={route.path}
                element={route.component}
              />
            ))}
          </Routes>
        </BrowserRouter>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
