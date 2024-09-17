// which type of array format we want to generate

type JOKE = {
    joke: string;
    score: number;
    date: string; 
};

const reportJokes: JOKE[] = [];

// gets the data from the votations 

function getData() {

    const options = document.getElementsByName('option') as NodeListOf<HTMLInputElement>;
    let choosenOption: string | null = null;
    let score: number = 0;

    options.forEach(option => {
        if (option.checked) {
            choosenOption = option.value;
        }
    });

    if (choosenOption !== null) {
       
        if (choosenOption === 'option1') {
            score = 1; 
        } else if (choosenOption === 'option2') {
            score = 2 
        } else if (choosenOption === 'option3') {
            score = 3
        }
        
        const dateISO = createDateISO();
        const randomJoke: HTMLElement | null = document.getElementById('randomJokes')!;
        const jokeText = randomJoke.innerText;

        const jokeObject: JOKE = {
            joke: jokeText,
            score: score,
            date: dateISO,
        };

        reportJokes.push(jokeObject);
        console.log(reportJokes);

    } else {
        console.log('no options choosen');
    }

    uncheck();
}

function uncheck() {

    const options = document.getElementsByName('option') as NodeListOf<HTMLInputElement>;
    options.forEach(option => {
        option.checked = false;
    })
}

function createDateISO() {

    const actualDate = new Date();
    const dateISO = actualDate.toISOString();
    return dateISO;
}
