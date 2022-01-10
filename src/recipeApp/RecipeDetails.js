import React, { useState } from 'react'
import './Style.css'

function RecipeDetails(props) {

    const [items, setitems] = useState([])

    const [recipeList, setrecipeList] = useState([
        {
            
            recipeName:'Paneer Butter Masala',
            recipeDetails:'Here is a super satisfying Paneer Butter masala recipe for all the paneer-lovers that you can quickly cook up on a weeknight to enjoy with homemade tandoori roti or naan. Soft and succulent paneer pieces simmered in a deliciously rich and smooth gravy creates a dish that’s high in taste, low in efforts, and delights all palates!',
            img:"https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3.jpg"

        },
        {
           
            recipeName:'Strawberry Shake',
            recipeDetails:`Wash and trim strawberries.
            Toss everything to a blender and blend until smooth. Feel free to use frozen strawberries for this smoothie. If using frozen strawberries, cut down on ice cubes.
            Adjust consistency to taste. For a thicker consistency add less milk. For extra flavor, add flavored milk to your smoothie. Blend until smooth.
            Pour and enjoy! Or you could make a yummy smoothie bowl and relish the goodness.`,
            img:"https://www.ruchiskitchen.com/wp-content/uploads/2016/04/strawberry-smoothie-2.jpg"

        },
        {
            
            recipeName:'Vanilla Cupcake',
            recipeDetails:`If you’re craving something sweet that is quick, easy, and delicious, then my dear friends, you have come to the right place. Incredibly moist, rich, and decadent eggless vanilla cupcakes topped with a luscious whipped cream frosting are perfect for birthdays, special occasions, or just for that special day in your life! `,
            img:"https://www.ruchiskitchen.com/wp-content/uploads/2015/07/Eggless-vanilla-cupcakes-1.jpg"

        }
    ])

    let sendData=(index)=>{
        let recipeDataList=recipeList[index]  
        props.getRecipeData(recipeDataList)
    }

    
    return (
        <div class="row">
  <div class="col-sm-6">
           
            {
                recipeList.map((list,index)=>{
                    console.log(list);
                   return <div key={index}> 
                      
                       <div class="card">
                           <div>{list.Id} </div>
 
  <div className="card-body">
    <h5 className="card-title">{list.recipeName}</h5>
    <img className="card-img-top " src={list.img} alt="Card image cap" onClick={()=>sendData(index)} /> 
    
  </div>
  
  
</div>
                   </div>  
                })
            }
        </div>
        </div>
    )
}

export default RecipeDetails
