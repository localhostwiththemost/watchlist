"use strict";

const moviePicks = document.getElementById("movie-picks");
const movieCard = document.getElementById("movie-card");

const poster = localStorage.getItem("poster");
const title = localStorage.getItem("title");
const rating = localStorage.getItem("rating");
const runtime = localStorage.getItem("runtime");
const genre = localStorage.getItem("genre");
const plot = localStorage.getItem("plot");

// if localStorage has a defined poster key, create a movie card
if (localStorage.getItem("poster") !== null) {
  moviePicks.innerHTML = `
  <div class="movie-card" id="movie-card">
  <div class="poster-container">
  <img src=${poster} />
  </div>
  
  <div class="info-container">
  
  <div class="title-rating-container">
  <h3>${title}</h3>
  <h4>&#11088; ${rating}</h4>
  </div>

  <div class="runtime-genre-container">
  <h5>${runtime}</h5>
  <h5>${genre}</h5>
  <div class="remove-watchlist">
  <img src="../images/subtract.png" />
  <h5>Remove</h5>
  </div>
  </div>
  
  <p class="plot">${plot}</p>

  </div>      
  `;
}

document.querySelector("#movie-picks").addEventListener("click", (event) => {
  if (
    event.target.matches(".remove-watchlist") ||
    event.target.closest(".remove-watchlist")
  ) {
    localStorage.clear();

    moviePicks.innerHTML = `<h2 class="empty-watchlist">
                  Your watchlist is looking a little empty...
                  </h2>
                  <div class="add-movies">
                  <img src="../images/add.png" />
                  <h3><a href="index.html">Let's add some movies!</a></h3>
                  </div>`;
  }
});

//   //     localStorage.removeItem("poster");
//   //     localStorage.removeItem("title");
//   //     localStorage.removeItem("rating");
//   //     localStorage.removeItem("runtime");
//   //     localStorage.removeItem("genre");
//   //localStorage.removeItem("plot");
