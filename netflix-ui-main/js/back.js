// backOffice

const url = new URLSearchParams(window.location.search);
const movieId = url.get("movieId");
// console.log(movieId);
window.onload = async () => {
  if (movieId) {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/movies/Documentary`,
      {
        // method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjQwZmQ0YmUzZDAwMTU4NDVmZWQiLCJpYXQiOjE2NjgxMzYyMjMsImV4cCI6MTY2OTM0NTgyM30.VUS9Kr-_8IzdCkkChoj2bIHL51bsb4NkyqT8De780Ec",
        },
      }
    );
    console.log(response);
    const movie = await response.json();

    let addStokeButton = document.querySelector("#add-button");
    addStokeButton.innerText = "Edit Event";
    addStokeButton.classList.remove("btn-primary");
    addStokeButton.classList.add("btn-success");

    document.querySelector("#movie-name").value = movie.name;
    document.querySelector("#movie-description").value = movie.description;
    document.querySelector("#movie-price").value = product.price;
  }
};

async function onFormSubmit(movie) {
  movie.preventDefault();

  const newMovie = {
    name: document.querySelector("#movie-name").value,
    description: document.querySelector("#movie-description").value,
    category: document.querySelector("#movie-category").value,
    cover: document.querySelector("#cover-img").value,
  };
  console.log(newMovie);
  const options = {
    method: movieId ? "PUT" : "POST",

    // method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjQwZmQ0YmUzZDAwMTU4NDVmZWQiLCJpYXQiOjE2NjgxMzYyMjMsImV4cCI6MTY2OTM0NTgyM30.VUS9Kr-_8IzdCkkChoj2bIHL51bsb4NkyqT8De780Ec",
    },

    body: JSON.stringify(newMovie),
  };

  try {
    const endpoint = movieId
      ? `https://striveschool-api.herokuapp.com/api/movie/`
      : "https://striveschool-api.herokuapp.com/api/movie/";

    const response = await fetch(endpoint, options, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjQwZmQ0YmUzZDAwMTU4NDVmZWQiLCJpYXQiOjE2NjgxMzYyMjMsImV4cCI6MTY2OTM0NTgyM30.VUS9Kr-_8IzdCkkChoj2bIHL51bsb4NkyqT8De780Ec",
      },
    });
    if (response.ok) {
      window.location.assign("index.html");
    }
  } catch (error) {
    console.error(error);
  }
}
/*
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
      crossorigin="anonymous"
    />
    <link href="css/styles.css" rel="stylesheet" />
    <title>Netflix</title>
  </head>
  <style>
    #movie-category {
      font-weight: normal;
      font-size: 16px;
      background-color: white;
    }
  </style>

  <body>
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="http://ubeytdemir.me/netflix-ui">
          <img src="./assets/netflix_logo.png" id="logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Tv Shows</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Movies</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Recently Added</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="list.html">My List</a>
            </li>
          </ul>

          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search icon"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                  />
                </svg>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">KIDS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-bell-fill icon"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"
                  />
                </svg>
              </a>
            </li>

            <li class="nav-item">
              <div class="btn-group">
                <button
                  type="button"
                  class="btn dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src="./assets/avatar.png" id="avatar" />
                </button>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li>
                    <a
                      class="dropdown-item"
                      href="http://ubeytdemir.me/netflix-ui/profile.html"
                    >
                      <div class="d-flex align-items-center">
                        <img src="./assets/avatar.png" id="avatar-small" />
                        Ubeyt
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="http://ubeytdemir.me/netflix-ui/profile.html"
                      >Manage Profiles</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="http://ubeytdemir.me/netflix-ui/accounts.html"
                      >Account</a
                    >
                  </li>
                  <li><a class="dropdown-item" href="#">Help Center</a></li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li><a class="dropdown-item" href="#">Signout Netflix</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="account-page">
      <div class="container p-5">
        <h3>Back Movies Office</h3>
        <hr />
      </div>
      <!-- Content -->
      <div class="container mb-5">
        <div class="row justify-content-center">
          <div class="col-md-6 mt-5">
            <h1>Add Movie to My List</h1>
            <form onsubmit="onFormSubmit(event)" id="event-form">
              <div class="form-group mt-3">
                <label for="movie-name">Movie Tittle:</label>
                <input
                  type="text"
                  class="form-control"
                  id="movie-name"
                  required
                  placeholder="Titanic"
                />
              </div>
              <div class="form-group mt-3">
                <label for="movie-description">Movie Description:</label>
                <textarea
                  class="form-control"
                  id="movie-description"
                ></textarea>
              </div>
              <div class="form-group mt-3">
                <label for="movie-category">Movie Genres:</label>
                <input
                  type="text"
                  class="form-control"
                  id="movie-category"
                  placeholder="Horror"
                  
                />
              </div>
              <div class="form-group mt-3">
                <label for="movie-img">Movie Cover Image:</label>
                <input
                  type="url"
                  class="form-control"
                  id="cover-img"
                  placeholder="https://www.bing.com/images/"
                  name="movie-name"
                />
              </div>
              <button
                id="add-button"
                type="submit"
                class="btn btn-primary my-4"
              >
                Add Movie
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
      crossorigin="anonymous"
    ></script>
    <script src="/js/back.js"></script>
  </body>
</html>
*/
