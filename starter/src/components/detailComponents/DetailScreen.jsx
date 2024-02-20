import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import RecipeBanner from "./RecipeBanner";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import "../../App.css";

const DetailScreen = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios
      .get(`https://recipes.devmountain.com/recipes/${id}`)
      .then((res) => {
        setRecipe(res.data);
      })
      .catch((error) => {
        console.error("Error fetching recipe data:", error);
      });
  }, [id]);

  return (
    <section className="detail-screen">
      <RecipeBanner />
      <div className="detail-container">
        <div className="ingredients-container">
          <Ingredients recipe={recipe} />
        </div>
        <div className="instructions-container">
          <Instructions recipe={recipe} />
        </div>
      </div>
    </section>
  );
};

export default DetailScreen;
