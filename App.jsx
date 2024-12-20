import React, { useState, useEffect } from 'react';
import RecipeList from './components/RecipeList';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/recipes')
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="App">
      <h1>Recipe Sharing Platform</h1>
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
