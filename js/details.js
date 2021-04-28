
const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");



// create the url by addin the id to the end
const url = "https://api.artic.edu/api/v1/artworks?id=" + id ;

const idContainer = document.querySelector(".id");
const detailContainer = document.querySelector(".details");

idContainer.innerHTML = id;

async function apiCall() {
    try {

        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHTML (details);


    } catch (error) {
        console.log(error);
        detailContainer.innerHTML = error;
    }
}

apiCall();

function createHTML (details) {
    detailContainer.innerHTML += `<h1> ${details.info}  </h1>`
}