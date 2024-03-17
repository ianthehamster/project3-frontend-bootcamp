import React from "react";
import { Link } from "react-router-dom";
export const ProductsList = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };
  return (
    <div>
      <p> Products in the selected category:</p>
      <ul>
        <li>
          <Link to={"/categories/:categoryId/:productId"} style={linkStyle}>
            Product 1
          </Link>
        </li>
        <li>
          <Link to={"/categories/:categoryId/:productId"} style={linkStyle}>
            Product 2
          </Link>
        </li>
        <li>
          <Link to={"/categories/:categoryId/:productId"} style={linkStyle}>
            Product 3
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default ProductsList;
