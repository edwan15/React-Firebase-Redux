import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Product from "./components/Product/Product";
import Login from "./components/auth/Login"

function App() {
  return (
    <>
      <Routes>
        <Route />
        <Route path="/home" element={<Header />} />
        <Route path="/product" element={<Product />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
