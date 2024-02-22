import React, { useState } from "react";
import { Formik } from "formik";
import "../../App.css";
import axios from "axios";

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const addIngredient = () => {
    setIngredients([...ingredients, { name, quantity }]);
    setName("");
    setQuantity("");
  };

  const initialValues = {
    name: "",
    imageURL: "",
    type: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };

  const onSubmit = async (values) => {
    values.ingredients = ingredients;
    try {
      const response = await axios.post(
        `https://recipes.devmountain.com/recipes`,
        values
      );
      console.log("Recipe posted successfully:", response.data);
    } catch (error) {
      console.error("Error posting recipe:", error);
    }
  };

  return (
    <section className="recipe-form-container">
      <h1 className="form-title">Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form className="recipe-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                className="input-field"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
                name="name"
              />
              <input
                className="input-field"
                placeholder="Image URL"
                value={values.imageURL}
                onChange={handleChange}
                name="imageURL"
              />
            </div>
            <div className="form-row">
              <input
                type="radio"
                id="cook"
                name="type"
                value="Cook"
                onChange={handleChange}
              />
              <label htmlFor="cook">Cook</label>
              <input
                type="radio"
                id="bake"
                name="type"
                value="Bake"
                onChange={handleChange}
              />
              <label htmlFor="bake">Bake</label>
              <input
                type="radio"
                id="drink"
                name="type"
                value="Drink"
                onChange={handleChange}
              />
              <label htmlFor="drink">Drink</label>
            </div>
            <div className="form-row">
              <input
                className="input-field"
                placeholder="Prep Time"
                value={values.prepTime}
                onChange={handleChange}
                name="prepTime"
              />
              <input
                className="input-field"
                placeholder="Cook Time"
                value={values.cookTime}
                onChange={handleChange}
                name="cookTime"
              />
              <input
                className="input-field"
                placeholder="Serves"
                value={values.serves}
                onChange={handleChange}
                name="serves"
              />
            </div>
            <div className="form-row">
              <input
                className="input-field"
                placeholder="Ingredient"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="input-field"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <button
              className="add-button"
              type="button"
              onClick={addIngredient}
            >
              Add Another
            </button>
            {ingredients.map((ingredient, index) => (
              <div key={index} className="form-row">
                <p className="ingredient-item">
                  {ingredient.name}: {ingredient.quantity}
                </p>
              </div>
            ))}
            <textarea
              className="input-field instructions-form"
              placeholder="What are the instructions?"
              value={values.instructions}
              onChange={handleChange}
              name="instructions"
            />
            <button className="blue-btn save-button" type="submit">
              Save
            </button>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
