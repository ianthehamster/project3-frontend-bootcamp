import React from "react";
import { Link } from "react-router-dom";

const ShopCatalog = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };

  return (
    <div>
      <p>Catalog</p>
      <ul>
        <li>
          <Link to={"/categories/:categoryId"} style={linkStyle}>
            Category 1
          </Link>
        </li>
        <li>
          <Link to={"/categories/:categoryId"} style={linkStyle}>
            Category 2
          </Link>
        </li>
        <li>
          <Link to={"/categories/:categoryId"} style={linkStyle}>
            Category 3
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ShopCatalog;
