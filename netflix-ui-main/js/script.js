//headers

async function getDocumentaries() {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/movies/Documentary",
    {
      // method: "POST",
      headers: {
        "Content-Type": "application/json",

        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjQwZmQ0YmUzZDAwMTU4NDVmZWQiLCJpYXQiOjE2NjgxMzYyMjMsImV4cCI6MTY2OTM0NTgyM30.VUS9Kr-_8IzdCkkChoj2bIHL51bsb4NkyqT8De780Ec",
      },
    }
  );

  const documentanty = await response.json();

  return documentanty;
}
const container = document.querySelector(".container");
const row = document.querySelector(".row");
const body = document.querySelector("body");

function renderDocumentaries(arrOfDocumentaries) {
  console.log(arrOfDocumentaries);

  arrOfDocumentaries.forEach(
    ({ name, description, category, _id, imageUrl }, index) => {
      let div = document.createElement("div");

      div.classList = "movie-card col-12 col-sm-6 col-md-4 col-lg-3 px-0 my-5";
      let card = `<div class=" card mx-3">
          <img src="${imageUrl}" class="  movie-img card-img-top ">
          <div class="card-body">
                <h5 class="documentry-name">${name}</h5>
                <p class="documentry-description">Description: <hr/> <span class="documentry-description">${description}</span></p>
                <hr/>
                <p class="documentry-category"> Category:
                ${category}</p>
                
                </div class="d-flex just-content-center">
                <a class"col " href="details.html?movieId=${_id}">VIEW MORE DETAILS </a>
                </div>
                
                
                </div>
                `;

      div.innerHTML = card;
      row.appendChild(div);
    }
  );
}
// function renderDocumentaries(arrOfDocumentaries) {
//   console.log(arrOfDocumentaries);

//   arrOfDocumentaries.forEach(
//     ({ name, description, category, _id, imageUrl }, index) => {
//       let div = document.createElement("div");

//       div.classList = "movie-card col-12 col-sm-6 col-md-4 col-lg-3 px-0 my-5";
//       let card = `<div class=" card mx-3">
//           <img src="${imageUrl}" class="  movie-img card-img-top ">
//           <div class="card-body">
//                 <h5 class="documentry-name">${name}</h5>
//                 <p class="documentry-description">Description: <hr/> <span class="documentry-description">${description}</span></p>
//                 <hr/>
//                 <p class="documentry-category"> Category:
//                 ${category}</p>

//                 </div class="d-flex just-content-center">
//                 <a class"col " href="details.html?movieId=${_id}">VIEW </a>
//                 </div>

//                 </div>
//                 `;

//       div.innerHTML = card;
//       row.appendChild(div);
//     }
//   );
// }
window.onload = async () => {
  const documentanty = await getDocumentaries();
  renderDocumentaries(documentanty);
};
