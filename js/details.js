
const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("name");


const url = "https://www.easports.com/fifa/ultimate-team/api/fut/item/" ;
const corsUrl = "https://noroffcors.herokuapp.com/" + url;


const detailsContainer = document.querySelector(".details-container");
const idContainer = document.querySelector(".hei");
idContainer.innerHTML = id;


detailsContainer.innerHTML = "";


async function fetchBook () {
    try {

        const response = await fetch(corsUrl);
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

    document.title = `${details.type}`;

    detailsContainer.innerHTML = `<div class="details_container"> ${details.type} ${details.count} ${details.totalResults}  </div>` ;
    
}
