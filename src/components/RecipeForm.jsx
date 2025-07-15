import { useState } from "react";
import { createRecipe } from "../api";

export default function RecipeForm({ onCreated }) {
  const [form, setForm] = useState({
    id: "",
    name: "",
    ingredients: "",
    instructions: "",
    preparationTime: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createRecipe({
        ...form,
        ingredients: form.ingredients.split(",").map((i) => i.trim())
      });
      alert("Recipe Created");
      onCreated();
      setForm({ id: "", name: "", ingredients: "", instructions: "", preparationTime: "" });
    } catch (err) {
      alert("Error creating recipe");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create Recipe</h3>
      <input placeholder="ID" value={form.id} onChange={(e) => setForm({ ...form, id: e.target.value })} required />
      <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
      <input placeholder="Ingredients (comma-separated)" value={form.ingredients} onChange={(e) => setForm({ ...form, ingredients: e.target.value })} required />
      <textarea placeholder="Instructions" value={form.instructions} onChange={(e) => setForm({ ...form, instructions: e.target.value })} required />
      <input placeholder="Preparation Time" type="number" value={form.preparationTime} onChange={(e) => setForm({ ...form, preparationTime: e.target.value })} required />
      <button type="submit">Add Recipe</button>
    </form>
  );
}
