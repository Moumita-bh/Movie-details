// index.js

const API_KEY = '542c7c73'; // Store your API key

let main = document.getElementById("box");
let button = document.getElementById("search");

button.addEventListener("click", function(){
    getData();
});

async function getData() {
    let query = document.getElementById("movieTitle").value; // Corrected element ID

    try {
        let response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`); // Corrected API URL
        let data = await response.json();

        if (data.Response === "True") {
            let res = data.Search;
            displayData(res);
        } else {
            console.log(data.Error); // Log the error message from the API
        }
    } catch (error) {
        console.log(error);
    }
}

function displayData(res) {
    main.innerHTML = ''; // Clear previous results

    res.forEach((movie) => {
        let title = document.createElement("p");
        title.textContent = movie.Title;
        main.appendChild(title);
    });
}

