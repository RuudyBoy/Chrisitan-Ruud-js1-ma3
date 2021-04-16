

// Question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
    
const container = document.querySelector(".container");


  async function apiCall () {

    try {
    
    const response = await fetch (url);

    const data = await response.json();

    const array = data.results;

    container.innerHTML = "";

    for (let i = 0; i < array.length; i ++) {

      if (i === 8) {
        break
      }

      container.innerHTML += `<div class="container">${array[i].name} ${array[i].rating} ${array[i].tags.length} </div>`;
    
    } 

  } catch (error) {
    
    console.log("error");
    container.innerHTML = "An error has occured";

    }

}

apiCall();