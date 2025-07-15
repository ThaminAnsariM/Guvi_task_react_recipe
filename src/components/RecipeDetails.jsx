import { useState } from "react";
import { getRecipeById } from "../api";

export default function RecipeDetails() {
  const [id, setId] = useState("");
  const [recipe, setRecipe] = useState(null);

  const handleFetch = async () => {
    try {
      const res = await getRecipeById(id);
      setRecipe(res.data.data);
    } catch (err) {
      setRecipe(null);
      alert("Recipe not found");
    }
  };

  return (
    <div>
      <h3>🔍 View Recipe by ID</h3>
      <input
        placeholder="Enter Recipe ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleFetch}>View</button>

      {recipe && (
        <div style={{ marginTop: "15px" }}>
          <h4>{recipe.name}</h4>
          <p><strong>ID:</strong> {recipe.id}</p>
          <p><strong>Preparation Time:</strong> {recipe.preparationTime} minutes</p>
          <p><strong>Ingredients:</strong></p>
          <ul>
            {recipe.ingredients.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p><strong>Instructions:</strong> {recipe.instructions}</p>
        </div>
      )}
    </div>
  );
}
