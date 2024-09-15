import React, { useState, useEffect } from "react";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  // Fetch the recipe data from data.json
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="border rounded-lg shadow-lg p-4">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-32 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
            <p className="text-white-700 mb-4">{recipe.summary}</p>
            <a
              href={`/recipe/${recipe.id}`}
              className="text-blue-500 hover:underline"
            >
              View Recipe
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
