// backOffice

const url = new URLSearchParams(window.location.search);
const movieId = url.get("movieId");
window.onload = async () => {
  if (movieId) {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/movies/Documentary/`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjQwZmQ0YmUzZDAwMTU4NDVmZWQiLCJpYXQiOjE2NjgxMzYyMjMsImV4cCI6MTY2OTM0NTgyM30.VUS9Kr-_8IzdCkkChoj2bIHL51bsb4NkyqT8De780Ec",
        },
      }
    );
    const movie = await response.json();
    const getFilm = await movie.filter((film) => {
      if (film._id === movieId) {
        console.log(film);

        let addStokeButton = document.querySelector("#add-button");
        addStokeButton.innerText = "Submit";
        addStokeButton.classList.remove("btn-primary");
        addStokeButton.classList.add("btn-success");

        document.querySelector("#movie-name").value = film.name;
        document.querySelector("#movie-description").value = film.description;
        document.querySelector("#movie-category").value = film.category;
        document.querySelector("#cover-img").value = film.imageUrl;
      }
    });
    console.log(movie);
  }
};

async function onFormSubmit(movie) {
  movie.preventDefault();
  const newMovie = {
    name: document.querySelector("#movie-name").value,
    description: document.querySelector("#movie-description").value,
    category: document.querySelector("#movie-category").value,
    imageUrl: document.querySelector("#cover-img").value,
  };
  console.log(newMovie);

  const options = {
    method: movieId ? "PUT" : "POST",

    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjQwZmQ0YmUzZDAwMTU4NDVmZWQiLCJpYXQiOjE2NjgxMzYyMjMsImV4cCI6MTY2OTM0NTgyM30.VUS9Kr-_8IzdCkkChoj2bIHL51bsb4NkyqT8De780Ec",
    },

    body: JSON.stringify(newMovie),
  };

  try {
    const endpoint = movieId
      ? `https://striveschool-api.herokuapp.com/api/movies/Documentary/`
      : "https://striveschool-api.herokuapp.com/api/movies/";

    const response = await fetch(endpoint, options, {});
    const movie = await response.json();

    const getFilm = await movie.filter((film) => {
      if (film._id === movieId) {
        const newMovie = {
          name: document.querySelector("#movie-name").value,
          description: document.querySelector("#movie-description").value,
          category: document.querySelector("#movie-category").value,
          imageUrl: document.querySelector("#cover-img").value,
        };
        console.log(newMovie);
        console.log(film);
      }
    });
    if (response.ok) {
      window.location.assign("index.html");
    }
  } catch (error) {
    console.error(error);
  }
}
