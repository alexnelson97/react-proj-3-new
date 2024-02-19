import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  return (
    <header className="header">
      <h2 className="logo">Devmountain Eatery</h2>
      <nav className="nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/newRecipe" className="nav-link">
          Add Recipe
        </Link>
      </nav>
    </header>
  );
};

export default Header;
