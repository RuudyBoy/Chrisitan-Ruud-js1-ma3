
const select = document.querySelector("select");
const listContainer = document.querySelector(".list");

const url = "https://foodish-api.herokuapp.com";


async function apiCall (){

  const result = await fetch(url);
  const response = await result.json();
  

  console.log(response);
  

for (let i = 0; i < hoy.length; i++) {

  if (i === 15) {
    break
  }


        listContainer.innerHTML += `<a class="item" href="details.html?id=${hoy.id}">${i}</a>`;
    }

}

    
apiCall();


