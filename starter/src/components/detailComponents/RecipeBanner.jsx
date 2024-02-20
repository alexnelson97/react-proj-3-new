import React from "react";
import salmon from "../../assets/salmon.jpg";
import "../../App.css";

const RecipeBanner = () => {
  return (
    <div className="recipe-banner">
      <div
        className="banner-content"
        style={{
          backgroundImage: `linear-gradient(
            190deg,
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0.8)
          ), url(${salmon})`,
        }}
      >
        <div>
          <h1>Pineapple Salmon</h1>
        </div>
      </div>
    </div>
  );
};

export default RecipeBanner;
