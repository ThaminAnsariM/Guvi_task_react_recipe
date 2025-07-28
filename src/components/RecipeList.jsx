import { useEffect, useState } from "react";


export default function RecipeList({ onDeleted }) {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const res = await getAllRecipes();
      setRecipes(res.data.data);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch recipes");
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, [onDeleted]);

  const handleDelete = async (id) => {
    if (window.confirm("Delete this recipe?")) {
      await deleteRecipe(id);
      fetchRecipes();
      onDeleted();
    }
  };

  return (
    <div>
      <h3>All Recipes</h3>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <strong>{recipe.name}</strong> – {recipe.preparationTime} min
            <button onClick={() => handleDelete(recipe.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
