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
    imageUrl: document.querySelector("#cover-img").value,
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
      ? `https://striveschool-api.herokuapp.com/api/movies/`
      : "https://striveschool-api.herokuapp.com/api/movies/";

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
