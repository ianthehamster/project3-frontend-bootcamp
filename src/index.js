import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import ShopCatalog from "./Components/ShopCatalog";
import HomePage from "./Components/HomePage";
import ProductsList from "./Components/ProductsList";
import ProductDetails from "./Components/ProductDetails";
import Cart from "./Components/Cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<HomePage />} />
        <Route path="categories" element={<ShopCatalog />} />
        <Route path="/categories/:categoryId" element={<ProductsList />} />
        <Route
          path="/categories/:categoryId/:productId"
          element={<ProductDetails />}
        />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={"Nothing here!"} />
      </Route>
    </Routes>
  </BrowserRouter>
);
