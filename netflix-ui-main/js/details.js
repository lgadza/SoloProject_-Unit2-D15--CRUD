const url = new URLSearchParams(window.location.search);
const movieId = url.get("movieId");
console.log(movieId);

async function getMovie() {
  const response = await fetch(
    `https://striveschool-api.herokuapp.com/api/movies/Documentary/`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjQwZmQ0YmUzZDAwMTU4NDVmZWQiLCJpYXQiOjE2NjgxMzYyMjMsImV4cCI6MTY2OTM0NTgyM30.VUS9Kr-_8IzdCkkChoj2bIHL51bsb4NkyqT8De780Ec",
      },
    }
  );
  const movies = await response.json();
  const getFilm = await movies.filter((film) => {
    if (film._id === movieId) {
      console.log(film);
      return film;
    }
  });
  return getFilm;
}
// console.log(getMovie((data) => console.log(data)));

let row = document.querySelector("#movie-details");

function renderMovies(getFilm) {
  console.log(getFilm);
  let container = document.querySelector(".movie-details");
  console.log(container);

  container.innerHTML = `
        <img src="${getFilm[0].imageUrl}" class="  movie-img card-img-top ">
        <h2 class="display-4">Title: ${getFilm[0].name}</h2>
        <p>Description: <hr>${getFilm[0].description}</p>
        <h3 class="mb-3">Category: ${getFilm[0].category}<h3>
        <h6 class="pl-2 py-3 bg-light">Server Details</h6>
        <ul class="list-group list-group-flush mb-4">
          <li class="list-group-item pl-2"><b>id: </b>${getFilm[0]._id}</li>
          <li class="list-group-item pl-2"><b>createdAt: </b>${getFilm[0].createdAt}</li>
          <li class="list-group-item pl-2"><b>updatedAt: </b>${getFilm[0].updatedAt}</li>
        </ul>`;
}

window.onload = async () => {
  const movie = await getMovie();
  renderMovies(movie);
};

async function onDelete() {
  //try {

  if (confirm("Do you really want to delete this event?")) {
    const options = {
      method: "DELETE",

      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjQwZmQ0YmUzZDAwMTU4NDVmZWQiLCJpYXQiOjE2NjgxMzYyMjMsImV4cCI6MTY2OTM0NTgyM30.VUS9Kr-_8IzdCkkChoj2bIHL51bsb4NkyqT8De780Ec",
      },
    };
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/movie/${movieId}`,
      options
    );
    if (response.ok) {
      window.location.assign("index.html");
    } else {
      alert("Error while deleting!");
    }
  }

  //   } catch (error) {
  //     alert(`Some erorr occured: ${error}`)
  //   }
}

function onEdit() {
  window.location.assign(`back.html?movieId=${movieId}`);
}

const loader = document.getElementById("loader");

function setLoading(loading) {
  console.log("SETLOADING", loading);
  if (loading) {
    loader.classList.remove("d-none");
  } else {
    loader.classList.add("d-none");
  }
}
