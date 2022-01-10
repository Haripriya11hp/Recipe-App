import logo from './logo.svg';
import './App.css';
import './recipeApp/Style.css'

import Navbar from './recipeApp/Nav';
import RecipeDetails from './recipeApp/RecipeDetails';
import RecipeList from './recipeApp/RecipeList';
import { useState } from 'react';

function App() {
  const [sendRecipeData, setRecipeData] = useState(false)
  const [items, setitems] = useState({})
  let getRecipeData = (recipeList) => {
    console.log('app', recipeList);
    
    setitems(recipeList);
    setRecipeData(true);
  }



  return (
    <div className="App">
      <Navbar />
      <div class="row">
        <div class="col-sm-4">
          <div className='details'>
          <RecipeDetails getRecipeData={getRecipeData} />
          </div>
        </div>


        <div class="col-sm-6">
          <div className='list'>
          <RecipeList items={items} />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
