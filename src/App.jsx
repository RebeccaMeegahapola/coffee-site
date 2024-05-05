import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useState} from 'react';
import './App.css'
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (fItems) => {
    setCart([...cart, fItems]);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Menu" element={<Menu />} addToCart={addToCart} />
          <Route path="/Cart" element={<Cart />} cart={cart} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
