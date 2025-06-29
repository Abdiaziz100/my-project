// Getting elements from the HTML file
let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let input = document.querySelector("input");
input.focus(); 
// Automatically focus the input field when page loads

// Base API URL for meal search
let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

// Main function to fetch and display meal info
function searchMeal() {
  input.focus(); // Focus input field again after search
  let userValue = document.querySelector("#user-input").value;

  // If input is empty, show warning
  if (userValue.length == 0) {
    result.innerHTML = `<h3>Input Field Cannot be Empty</h3>`;
  } else {
    // Fetch data from the API
    fetch(url + userValue)
      .then((response) => response.json())
      .then((data) => {
        // If meal not found, throw error
        if (!data.meals) throw "No meal found";

        // Get the first meal result
        let myMeal = data.meals[0];
        console.log(myMeal); // Log meal info in console

        // Prepare ingredients list
        let count = 1;
        let ingredients = [];
        for (let i in myMeal) {
          let ingredient = "";
          let measure = "";

          // Look for all "strIngredient" fields that have a value
          if (i.startsWith("strIngredient") && myMeal[i]) {
            ingredient = myMeal[i];
            measure = myMeal["strMeasure" + count];
            count += 1;

            // Combine measure with ingredient (e.g. "1 cup Flour")
            ingredients.push(`${measure} ${ingredient}`);
          }
        }

        // Update result section with meal info
        result.innerHTML = `
          <img src=${myMeal.strMealThumb}>
          <div class="details">
            <h2>${myMeal.strMeal}</h2>
            <h4>${myMeal.strArea}</h4>
          </div>
          <div class="ingredient-content"></div>
          <div class="recipe">
            <button id="hide-recipe">X</button>
            <pre id="instructions">${myMeal.strInstructions}</pre>
          </div>
          <button id="show-recipe">View Recipe</button>
        `;

        // Select dynamic elements for recipe show/hide and ingredients
        let hideRecipe = document.querySelector("#hide-recipe");
        let showRecipe = document.querySelector("#show-recipe");
        let recipe = document.querySelector(".recipe");
        let ingredientContent = document.querySelector(".ingredient-content");

        // Create a list of ingredients and append to the page
        let parent = document.createElement("ul");
        ingredients.forEach((i) => {
          let child = document.createElement("li");
          child.innerText = i;
          parent.appendChild(child);
          ingredientContent.appendChild(parent);
        });

        // Hide recipe instructions when X is clicked
        hideRecipe.addEventListener("click", () => {
          recipe.style.display = "none";
        });

        // Show recipe instructions when button is clicked
        showRecipe.addEventListener("click", () => {
          recipe.style.display = "block";
        });
      })
      .catch(() => {
        // Display error message if fetch fails or meal not found
        result.innerHTML = `<h3>Invalid Input</h3>`;
      });
  }
}

// Listen for "Enter" key press in the input field
document.querySelector("input").addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    searchMeal(); // Trigger search when Enter is pressed
  }
});

// Add click event to the search button
searchBtn.addEventListener("click", searchMeal);
