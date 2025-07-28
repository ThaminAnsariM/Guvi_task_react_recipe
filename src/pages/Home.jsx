import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const api = import.meta.env.VITE_API_URL;

  async function fetchRecipes() {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(`${api}/api/recipes/all`, {
        headers: {
          Authorization: token,
        },
      });
      setRecipes(response.data.data); // Make sure this matches your API structure
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  }

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="font-sans text-gray-800">
      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-100 to-yellow-100 py-20 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4 text-orange-600">RecipeBook</h1>
        <p className="text-lg md:text-xl mb-6 text-gray-700">
          Discover, cook, and share amazing recipes from around the world.
        </p>
        <Link to="/recipes">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-lg">
            Explore Recipes
          </button>
        </Link>
      </section>

      {/* Featured Recipes */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Featured Recipes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(recipes) &&
            recipes.slice(0, 6).map((recipe) => (
              <div
                key={recipe._id}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 border border-gray-100"
              >
                <img
                  src={`https://source.unsplash.com/400x300/?food,${encodeURIComponent(recipe.name)}`}
                  alt={recipe.name}
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 className="text-xl font-semibold text-orange-600 mb-2">
                  {recipe.name}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3 mb-3">
                  {recipe.instructions}
                </p>
                <Link
                  to={`/recipes/${recipe._id}`}
                  className="text-orange-500 font-medium hover:underline"
                >
                  View Recipe →
                </Link>
              </div>
            ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-20 px-4 bg-orange-50">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Have a Recipe to Share?
        </h2>
        <p className="mb-6 text-gray-700 text-lg">
          Join our community and inspire food lovers with your delicious
          creations.
        </p>
        <Link to="/add-recipe">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-lg">
            Add Your Recipe
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p className="text-sm mb-2">© {new Date().getFullYear()} RecipeBook</p>
        <p className="text-xs text-gray-400">Built with ❤️ using MERN Stack</p>
      </footer>
    </div>
  );
};

export default Home;
