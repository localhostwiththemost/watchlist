"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const searchBar = document.getElementById("search-bar");
  const btnSearch = document.getElementById("btn-search");
  const searchResults = document.getElementById("search-results");

  btnSearch.addEventListener("click", function (e) {
    // fetch the movie based on the title the user input into the searchBar

    e.preventDefault();

    fetch(
      `http://www.omdbapi.com/?apikey=9a98a936&t=${searchBar.value}&type=movie`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        // Save movie data to localStorage when addto-watchlist div is clicked
        const saveToLS = function (data) {
          localStorage.setItem("poster", data.Poster);
          localStorage.setItem("title", data.Title);
          localStorage.setItem(
            "rating",
            data.Ratings.Value ? data.Ratings[0].Value : "N/A"
          );
          localStorage.setItem("runtime", data.Runtime);
          localStorage.setItem("genre", data.Genre);
          console.log(localStorage);
        };

        const movieCard = `
    <div class="movie-card">
    <div class="poster-container">
    <img src=${data.Poster} />
    </div>
    
    <div class="info-container">
    
    <div class="title-rating-container">
    <h3>${data.Title}</h3>
    <h4>&#11088; ${data.Ratings.Value ? data.Ratings[0].Value : "N/A"}</h4>
    </div>

    <div class="runtime-genre-container">
    <h5>${data.Runtime}</h5>
    <h5>${data.Genre}</h5>
    <div class="addto-watchlist" onclick="${saveToLS(data)}">
    <img src="../images/add.png" />
    <h5>Watchlist</h5>
    </div>
    </div>
    
    <p class="plot">${data.Plot}</p>

    </div>
    `;

        searchResults.innerHTML = movieCard;
      })
      .catch((err) => {
        searchResults.innerHTML = `<h2 class="error-text">Unable to find what you're looking for. Please try another search.</h2>`;
      });
  });
});
