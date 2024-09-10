
const apiUrl: string = "https://icanhazdadjoke.com/";

const options = {
    method: "GET",
    headers: {
        "Accept": "application/json", 
    },
};

function randomJoke() {
    fetch(apiUrl, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
    });
}