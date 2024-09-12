const dadApiUrl = "https://icanhazdadjoke.com/";
const chuckApiUrl = "https://api.chucknorris.io/jokes/random";
const options = {
    method: "GET",
    headers: {
        "Accept": "application/json",
    },
};
// calls dad jokes
function getDadJoke() {
    return fetch(dadApiUrl, options)
        .then(response => response.json())
        .then(data => data.joke);
}
// calls Chuck jokes
function getChuckNorrisJoke() {
    return fetch(chuckApiUrl)
        .then(response => response.json())
        .then(data => data.value);
}
// randomize jokes between dad and chuck norris jokes.
function getRandomJoke() {
    const randomIndex = Math.random();
    const jokePromise = randomIndex < 0.5 ? getDadJoke() : getChuckNorrisJoke();
    return jokePromise.then(joke => {
        let randomJokes = document.getElementById('randomJokes');
        randomJokes.innerText = joke;
        console.log(joke);
        return joke;
    });
}
// throws a joke when the web page loads.
document.addEventListener("DOMContentLoaded", () => {
    getRandomJoke();
});
function nextJoke() {
    getData();
    getRandomJoke();
}
const reportJokes = [];
// gets the data from the votations 
function getData() {
    const options = document.getElementsByName('option');
    let choosenOption = null;
    let score = 0;
    options.forEach(option => {
        if (option.checked) {
            choosenOption = option.value;
        }
    });
    if (choosenOption !== null) {
        if (choosenOption === 'option1') {
            score = 1;
        }
        else if (choosenOption === 'option2') {
            score = 2;
        }
        else if (choosenOption === 'option3') {
            score = 3;
        }
        const dateISO = createDateISO();
        const randomJoke = document.getElementById('randomJokes');
        const jokeText = randomJoke.innerText;
        const jokeObject = {
            joke: jokeText,
            score: score,
            date: dateISO,
        };
        reportJokes.push(jokeObject);
        console.log(reportJokes);
    }
    else {
        console.log('no options choosen');
    }
    uncheck();
}
function uncheck() {
    const options = document.getElementsByName('option');
    options.forEach(option => {
        option.checked = false;
    });
}
function createDateISO() {
    const actualDate = new Date();
    const dateISO = actualDate.toISOString();
    return dateISO;
}
/* To-DO
añadir api del tiempo
estilos =(

*/ 
//# sourceMappingURL=index.js.map