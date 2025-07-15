import React from "react";

function LandingPage() {
  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-4 bg-orange-500 text-white shadow-md">
        <h1 className="text-2xl font-bold">🍲 MyRecipeApp</h1>
        <div className="space-x-4">
          <a href="/login" className="hover:underline">Login</a>
          <a href="/register" className="bg-white text-orange-500 px-3 py-1 rounded-md hover:bg-orange-100">Register</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-orange-100 py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Discover & Share Delicious Recipes</h2>
        <p className="text-lg mb-6">Your personal recipe manager for meals you'll never forget.</p>
        <a href="/getAllRecipes" className="bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition">Explore Recipes</a>
      </header>

      {/* About Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-4">Why Choose MyRecipeApp?</h3>
        <p className="text-lg text-gray-600">Easily create, view, and manage all your favorite recipes in one place. With secure login and real-time updates, your kitchen will never be the same!</p>
      </section>

      {/* Featured Recipes */}
      <section className="bg-gray-50 py-16 px-6">
        <h3 className="text-2xl font-bold text-center mb-10">Featured Recipes</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Recipe Card */}
          {[1,2,3].map((item) => (
            <div key={item} className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-2">Chicken Biryani</h4>
              <p className="text-sm text-gray-600">Spicy, aromatic, and delicious layered rice dish.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 bg-white border-t mt-10">
        &copy; {new Date().getFullYear()} MyRecipeApp. All rights reserved.
      </footer>
    </div>
  );
}

export default LandingPage;
