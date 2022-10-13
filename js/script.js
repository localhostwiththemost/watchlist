"use strict";

// 1. Search bar calls to api with the movie title input and displays search results

// 2."Add to watchlist" btn saves that data to local storage

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

        searchResults.innerHTML = `
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
    <div class="addto-watchlist">
    <img src="../images/add.png" />
    <h5>Watchlist</h5>
    </div>
    </div>
    
    <p class="plot">${data.Plot}</p>

    </div>
    `;
      });
  });
});
