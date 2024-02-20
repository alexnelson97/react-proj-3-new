import React from "react";
import "../../App.css";

const Ingredients = ({ recipe }) => {
  return (
    <div>
      <h2 className="recipe-general-info">Recipe</h2>
      <h4>Prep Time: {recipe && recipe.prep_time}</h4>
      <h4>Cook Time: {recipe && recipe.cook_time}</h4>
      <h4>Serves: {recipe && recipe.servings}</h4>
      <h2 className="recipe-general-info">Ingredients</h2>
      {recipe &&
        recipe.ingredients.map((ing, index) => (
          <h4 key={index}>
            {ing.quantity} {ing.ingredient}
          </h4>
        ))}
    </div>
  );
};

export default Ingredients;
