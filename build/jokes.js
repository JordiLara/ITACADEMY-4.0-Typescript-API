// Jokes API URL here
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
// randomize jokes between dad and Chuck Norris jokes.
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
//# sourceMappingURL=jokes.js.map