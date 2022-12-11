import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Product from "./components/Product/Product";
import Login from "./components/auth/Login"
import Register from "./components/auth/Register";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route />
        <Route path="/home" element={<Header/>} />
        <Route path="/product" element={<Product />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/cart" element={<Cart/>} />

      </Routes>
    </>
  );
}

export default App;
