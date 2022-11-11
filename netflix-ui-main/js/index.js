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
const row = document.querySelector(".new-releases .row");
const trendingNow = document.querySelector("#trending-now .row");

console.log(row);
const body = document.querySelector("body");

function renderDocumentaries(arrOfDocumentaries) {
  console.log(arrOfDocumentaries);

  arrOfDocumentaries.forEach(
    ({ name, description, category, _id, imageUrl }, index) => {
      let div = document.createElement("div");

      div.classList = "col-md-2 mt-4";
      let card = `<div class=" card ">
          <img src="${imageUrl}" class="  movie-img card-img-top ">
  
                
                
                </div>
                `;

      div.innerHTML = card;
      row.appendChild(div);
    }
  );
}
const watchAgain = document.querySelector("#watch-again .row");
console.log(watchAgain);

window.onload = async () => {
  const action = await getAction();
  renderDocumentaries(action);
};

//Action

async function getAction() {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/movies/Action",
    {
      // method: "POST",
      headers: {
        "Content-Type": "application/json",

        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjQwZmQ0YmUzZDAwMTU4NDVmZWQiLCJpYXQiOjE2NjgxMzYyMjMsImV4cCI6MTY2OTM0NTgyM30.VUS9Kr-_8IzdCkkChoj2bIHL51bsb4NkyqT8De780Ec",
      },
    }
  );

  const action = await response.json();

  return action;
}
// const container = document.querySelector(".container");
// const row = document.querySelector(".new-release .row");
// console.log(row);
// const body = document.querySelector("body");

function renderDocumentaries(arrOfAction) {
  console.log(arrOfAction);

  arrOfAction.forEach(
    ({ name, description, category, _id, imageUrl }, index) => {
      let div = document.createElement("div");

      div.classList = "col-md-2 mt-4";
      let card = `<div class=" card ">
          <img src="${imageUrl}" class=" w-100 movie-img card-img-top ">
          
                
                
                </div>
                `;

      div.innerHTML = card;
      watchAgain.appendChild(div);
    }
  );
}

window.onload = async () => {
  const action = await getAction();
  renderDocumentaries(action);
};

// // Drama
// async function getAction() {
//   const response = await fetch(
//     "https://striveschool-api.herokuapp.com/api/movies/Drama",
//     {
//       // method: "POST",
//       headers: {
//         "Content-Type": "application/json",

//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjQwZmQ0YmUzZDAwMTU4NDVmZWQiLCJpYXQiOjE2NjgxMzYyMjMsImV4cCI6MTY2OTM0NTgyM30.VUS9Kr-_8IzdCkkChoj2bIHL51bsb4NkyqT8De780Ec",
//       },
//     }
//   );

//   const drama = await response.json();

//   return drama;
// }
// // const container = document.querySelector(".container");
// // const row = document.querySelector(".new-release .row");
// // console.log(row);
// // const body = document.querySelector("body");

// function renderDocumentaries(arrOfDrama) {
//   console.log(arrOfDrama);

//   arrOfDrama.forEach(
//     ({ name, description, category, _id, imageUrl }, index) => {
//       let div = document.createElement("div");

//       div.classList = "col-md-2 mt-4";
//       let card = `<div class=" card ">
//           <img src="${imageUrl}" class=" w-100 movie-img card-img-top ">
//           <div class="card-body">
//                 <h5 class="documentry-name">${name}</h5>

//                 </div class="view d-flex just-content-center">
//                 <a class"col " href="details.html?movieId=${_id}">VIEW MORE </a>
//                 </div>

//                 </div>
//                 `;

//       div.innerHTML = card;
//       trendingNow.appendChild(div);
//     }
//   );
// }

// window.onload = async () => {
//   const drama = await getAction();
//   renderDocumentaries(drama);
// };
