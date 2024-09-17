// which type of array format we want to generate
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
//# sourceMappingURL=ratings.js.map