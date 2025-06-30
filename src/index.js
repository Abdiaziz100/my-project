let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let input = document.querySelector("#user-input");
input.focus();

let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function searchMeal() {
  input.focus();
  let userValue = input.value.trim();

  if (userValue.length === 0) {
    result.innerHTML = `<h3>Input Field Cannot be Empty</h3>`;
    return;
  }

  fetch(url + userValue)
    .then((response) => response.json())
    .then((data) => {
      if (!data.meals) throw "No meal found";

      let myMeal = data.meals[0];
      console.log(myMeal);

      let count = 1;
      let ingredients = [];

      for (let i in myMeal) {
        if (i.startsWith("strIngredient") && myMeal[i]) {
          let ingredient = myMeal[i];
          let measure = myMeal["strMeasure" + count];
          ingredients.push(`${measure} ${ingredient}`);
          count++;
        }
      }

      result.innerHTML = `
        <img src="${myMeal.strMealThumb}">
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

      let hideRecipe = document.querySelector("#hide-recipe");
      let showRecipe = document.querySelector("#show-recipe");
      let recipe = document.querySelector(".recipe");
      let ingredientContent = document.querySelector(".ingredient-content");

      let ul = document.createElement("ul");
      ingredients.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        ul.appendChild(li);
      });
      ingredientContent.appendChild(ul);

      hideRecipe.addEventListener("click", () => {
        recipe.style.display = "none";
      });

      showRecipe.addEventListener("click", () => {
        recipe.style.display = "block";
      });
    })
    .catch(() => {
      result.innerHTML = `<h3>Invalid Input or Meal Not Found</h3>`;
    });
}

document.querySelector("#user-input").addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    searchMeal();
  }
});

searchBtn.addEventListener("click", searchMeal);
