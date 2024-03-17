import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };
  return (
    <div>
      <h1>Techie E-Store 📱</h1>
      <Link to={"/categories"} style={linkStyle}>
        Shop now
      </Link>
    </div>
  );
};

export default HomePage;
