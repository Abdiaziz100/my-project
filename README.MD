# THE FLAVOR DIARY

**The Flavor Diary** is a simple web application that allows users to search for meals and view details such as ingredients and recipe instructions. It uses the free [TheMealDB API](https://www.themealdb.com/) to fetch meal data based on a search query.

#  Features

- Search for meals by name.
- View meal image and name.
- Display country/region of origin.
- Show ingredients with their measurements.
- View or hide cooking instructions.

#  Project Structure
project-folder/
 index.html # HTML layout
 css/style.css # App styling
 src/index.js # JavaScript logic for fetching and displaying data
 README.md # Project documentation


# How to Use

1. Clone or download the repository.
2. Open `index.html` in your web browser.
3. Type a dish name into the search bar (e.g., "chicken") and press Enter or click **Search**.
4. The app will show the meal image, origin, ingredients list, and a **View Recipe** button.
5. Click **View Recipe** to read instructions; click the **X** to hide them.

#  Technologies Used

- HTML
- CSS
- JavaScript (ES6)
- Fetch API
- [TheMealDB API](https://www.themealdb.com/api.php)

#  Notes

- Ensure you are connected to the internet — the app fetches data from an external API.
- If the search input is empty, or if no matching meal is found, the app displays an appropriate error message.

#  License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).


