import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const APP_ID = '5122b075';
  const APP_KEY = '9b2b698f05a35494ae9d354f3cffe2d4';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('rice');

  useEffect(() => {
    getRecipes(); 
  }, [query]); 

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className='container mx-auto md:p-8 p-4'>
      <h1 className='md:text-5xl text-4xl text-center font-extrabold pb-8'> <span className='text-red-600'>Search </span>🔍 | <span className='text-pink-600'>Cook </span> 🥘 | <span className='text-purple-700'>Eat </span> 🍽 | <span className='text-blue-700'>Repeat </span> 💁🏻‍♂️ !</h1>
      <form onSubmit={getSearch} className='search-form text-center'>
        <input className='search-bar py-2 px-4 md:w-1/2 w-2/3 rounded text-2xl' type="text" value={search} onChange={updateSearch}/>
        <button className='search-button bg-yellow-700 hover:bg-yellow-800 text-white font-bold py-2 px-4 text-2xl rounded' type="submit">Search</button>
      </form>
      <div className='w-full grid grid-cols-1 mt-8 gap-10'>
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
