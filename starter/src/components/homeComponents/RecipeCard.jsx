import React from "react";
import "../../App.css";

const RecipeCard = () => {
  return (
    <div className="recipe-card">
      <img
        className="recipe-image"
        src="https://tatyanaseverydayfood.com/wp-content/uploads/2018/08/Creamy-Smoky-Ratatouille-2-731x1024.jpg"
        alt="Ratatouille"
      />
      <div className="recipe-details">
        <h3 className="recipe-name">Delicious ratatouille</h3>{" "}
        {/* Fake recipe name */}
        <button className="blue-btn">See More</button>
      </div>
    </div>
  );
};

export default RecipeCard;
