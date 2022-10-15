"use strict";

const searchBar = document.getElementById("search-bar");
const btnSearch = document.getElementById("btn-search");
const searchResults = document.getElementById("search-results");

// SEARCH BUTTON
btnSearch.addEventListener("click", function (e) {
  // fetch the movie based on the title the user input into the searchBar

  e.preventDefault();

  fetch(
    `http://www.omdbapi.com/?apikey=9a98a936&t=${searchBar.value}&type=movie`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      const movieCard = `
    <div class="movie-card">
    <div class="poster-container">
    <img src=${data.Poster} />
    </div>
    
    <div class="info-container">
    
    <div class="title-rating-container">
    <h3>${data.Title}</h3>
    <h4>&#11088; ${data.Ratings[0].Value ? data.Ratings[0].Value : "N/A"}</h4>
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

      // Save movie data to localStorage when addto-watchlist div is clicked
      document
        .querySelector("#search-results")
        .addEventListener("click", (event) => {
          if (
            event.target.matches(".addto-watchlist") ||
            event.target.closest(".addto-watchlist")
          ) {
            localStorage.setItem("poster", data.Poster);
            localStorage.setItem("title", data.Title);
            localStorage.setItem(
              "rating",
              data.Ratings[0].Value ? data.Ratings[0].Value : "N/A"
            );
            localStorage.setItem("runtime", data.Runtime);
            localStorage.setItem("genre", data.Genre);
            localStorage.setItem("plot", data.Plot);
          }

          // Create alert modal here:
          alert("Movie saved to Watchlist");
        });

      searchResults.innerHTML = movieCard;
    })
    .catch((err) => {
      searchResults.innerHTML = `<h2 class="error-text">Unable to find what you're looking for. Please try another search.</h2>`;
    });
});
