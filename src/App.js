import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import ProductItem from "./pages/ProductItem";
import { Fade } from "react-awesome-reveal";
import { CartContextProvider } from "./context/CartContext";
import { ErrorContextProvider } from "./context/ErrorContextProvider";
import Error from "../src/components/Error"

function App() {
  return (
    <Fade delay={300} duration={2000} triggerOnce fraction={0.5}>
      <div>
        <ErrorContextProvider>
          <CartContextProvider>
            <BrowserRouter>
              <NavBar />
              <Error />
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Login" element={<Login />}></Route>
                <Route path="/Cart" element={<Cart />}></Route>
                <Route path="/ProductItem/:id" element={<ProductItem />}></Route>
              </Routes>
            </BrowserRouter>
          </CartContextProvider>
        </ErrorContextProvider>

      </div>
    </Fade>
  );
}

export default App;
