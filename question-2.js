const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";


async function apiCall () {

    const response = await fetch (url);

    const results = await response.json();

    const facts = results.all;

    for (let i = 0, i < facts.length; i++) {
        console.log(facts[i].text);
    }

}

apiCall();