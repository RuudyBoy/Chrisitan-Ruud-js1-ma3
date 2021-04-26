const detailsContainer = document.querySelector(".details-container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const player = params.get("name");

if (player === null) {
    location.href = "/";
}

console.log(player);

const url = "https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=39&season=2020" + player;

const apiKey =  { "method": "GET", "headers": {
    "x-rapidapi-key": "623b2d79a6msh38ce6bc44c7bb1ap1aaf80jsn6fca4a0052bc",
    "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
  }};

const idContainer = document.querySelector(".id");


idContainer.innerHTML = player;


async function fetchBook () {
    try {

        const response = await fetch(url, apiKey);
        const details = await response.json();

        console.log(details);

        createHTML(details);

    }
    
    catch (error) {
     console.log("error");
     detailsContainer.innerHTML = "An error has occured :("
 }
}

fetchBook ();


function createHTML (details) {
    detailsContainer.innerHTML += `<h1> ${details.get} </h1>`;
}
