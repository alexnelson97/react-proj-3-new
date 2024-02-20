import React from "react";
import "../../App.css";

const Instructions = ({ recipe }) => {
  return (
    <div>
      <h2 className="instructions">Instructions</h2>
      <p style={{ whiteSpace: "pre-wrap" }}>
        {recipe && recipe.instructions && JSON.parse(recipe.instructions)}
      </p>
    </div>
  );
};

export default Instructions;
