// Getting elements from the HTML file
let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let input = document.querySelector("input");
input.focus(); 
// Automatically focus the input field when page loads

// Base API URL for meal search
let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

//main function to fetch and display meal search results
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

