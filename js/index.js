

// Question 2

const container = document.querySelector(".container");
const url = "https://www.easports.com/fifa/ultimate-team/api/fut/item";
const corsUrl = "https://noroffcors.herokuapp.com/" + url;






container.innerHTML = "";

  async function apiCall () {

    try {
    
    const result = await fetch(corsUrl)
  
    const data = await result.json();

    const hoy = data.items;

    
    for (let i = 0; i < hoy.length; i++) {

      if (i === 10) {
        break
      }


    container.innerHTML += ` <a class="card" href="details.html?name=${hoy[i].name}"> <div class=".container"> ${hoy[i].name} ${hoy[i].age} ${hoy[i].position} ${hoy[i].rating} ${hoy[i].club.name} </div> </a> `;


 }

  } catch (error) {
    
    console.log("error");


    }

}

apiCall();