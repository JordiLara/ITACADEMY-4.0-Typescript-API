
// throws a joke when the web page loads, and the weather info

document.addEventListener("DOMContentLoaded", () => {

    getRandomJoke();
    loadWeather();
});

/* main function to load new jokes when main button its pressed, then calls function to get the ratings data if needed */ 

function nextJoke() {

    getData();
    getRandomJoke();
}

