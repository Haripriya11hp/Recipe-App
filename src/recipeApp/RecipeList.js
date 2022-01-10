import React from 'react'
import './Style.css'


function RecipeList({items}) {
console.log('items',items);
    return (
        <div>
      <div class="card mb-3">
      
  <img class="card-img-top" src={items.img}  />
  <div class="card-body">
    <h5 class="card-title">{items.recipeName}</h5>
    <p class="card-text">{items.recipeDetails}</p>
  </div>
        </div>
</div>

    )
}

export default RecipeList
