import React from "react";
import { Navigate } from "react-router-dom";
import "../../App.css";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${recipe.recipe_id}`);
  };

  return (
    <div className="recipe-card">
      <img
        className="recipe-image"
        src={recipe.image_url}
        alt={recipe.recipe_name}
      />
      <div className="recipe-details">
        <h3 className="recipe-name">{recipe.recipe_name}</h3>
        <button className="blue-btn" onClick={handleClick}>
          See More
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
