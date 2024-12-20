import React from 'react';

function RecipeList({ recipes }) {
  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe._id}>
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default RecipeList;
