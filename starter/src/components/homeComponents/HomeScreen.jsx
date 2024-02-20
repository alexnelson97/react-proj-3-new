import React, { useState, useEffect } from "react";
import axios from "axios";
import AdBanner from "./AdBanner";
import RecipeCard from "./RecipeCard";
import { BiSearchAlt2 } from "react-icons/bi";
import "../../App.css";

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const response = await axios.get(
          "https://recipes.devmountain.com/recipes"
        );
        setRecipes(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    getRecipes();
  }, []);

  const recipeDisplay = recipes
    .filter((recipe, index) => {
      let title = recipe.recipe_name.toLowerCase();
      let searchParams = search.toLowerCase();
      return title.includes(searchParams);
    })
    .map((recipe, index) => {
      return <RecipeCard recipe={recipe} />;
    });

  return (
    <div>
      <AdBanner />
      <span className="search-container">
        <BiSearchAlt2 size="2em" color="#DA7635" />
        <input
          className="search-input"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a Recipe"
        />
      </span>
      <div className="recipe-card-container">{recipeDisplay}</div>
    </div>
  );
};

export default HomeScreen;
