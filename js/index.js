

// Question 2
const url = "https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=39&season=2020";
const container = document.querySelector(".container");


const apiKey =  {"method": "GET", "headers": {
  "x-rapidapi-key": "623b2d79a6msh38ce6bc44c7bb1ap1aaf80jsn6fca4a0052bc",
  "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
}};

  async function apiCall () {

    try {
    
    const response = await fetch(url, apiKey);
  
    const data = await response.json();

    const hoy = data.response;

    console.log(hoy);

    
    for (let i = 0; i < hoy.length; i++) {

      if ( i === 10) {
         break;
      }
     
   

    container.innerHTML += ` <a href="details.html?name=${hoy[i].player}" class="card"> <div> ${hoy[i].player.name} ${hoy[i].player.nationality} ${hoy[i].player.height} </div> </a> `;


 }

  } catch (error) {
    
    console.log("error");


    }

}

apiCall();