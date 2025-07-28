import React from "react";
import { Link } from "react-router";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding */}
        <div>
          <h1 className="text-2xl font-bold text-orange-400 mb-2">RecipeBook</h1>
          <p className="text-sm text-gray-300">
            Your go-to place for delicious recipes, healthy meals, and culinary inspiration.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-lg mb-1">Quick Links</h2>
          <Link to="/" className="hover:text-orange-300">Home</Link>
          <Link to="/recipes" className="hover:text-orange-300">Recipes</Link>
          <Link to="/add-recipe" className="hover:text-orange-300">Add Recipe</Link>
          <Link to="/about" className="hover:text-orange-300">About Us</Link>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="font-semibold text-lg mb-2">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-orange-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-orange-400"><FaTwitter /></a>
            <a href="#" className="hover:text-orange-400"><FaInstagram /></a>
            <a href="#" className="hover:text-orange-400"><FaGithub /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-400 mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} RecipeBook. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
