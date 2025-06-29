// Getting elements from the HTML file
let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let input = document.querySelector("input");
input.focus(); 
// Automatically focus the input field when page loads

// Base API URL for meal search
let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
