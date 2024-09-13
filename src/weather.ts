
// Weather info API URL here

const weatherApiUrl = "https://api.open-meteo.com/v1/forecast?latitude=41.3888&longitude=2.159&current=temperature_2m,precipitation,weather_code&hourly=temperature_2m&timezone=Europe%2FBerlin&forecast_days=1";

// API to extract the images from weather code

const weatherCodeUrl = "https://gist.githubusercontent.com/stellasphere/9490c195ed2b53c707087c8c2db4ec0c/raw/76b0cb0ef0bfd8a2ec988aa54e30ecd1b483495d/descriptions.json";

// calls temperature from API to get celsius temperature if aviable.

function loadWeather() {
    
    const request1 = fetch(weatherApiUrl).then(response => response.json());
    const request2 = fetch(weatherCodeUrl).then(response => response.json());

    Promise.all([request1, request2])
    .then(([data1, data2]) => {

        const temperature = data1.current.temperature_2m;
        const units = data1.current_units.temperature_2m;

        document.getElementById('weatherTemp').innerHTML = `${temperature} ${units}`;

            // the weather API gives a code that its used to search into another api for a match code to show a picture that match the weather

        const weatherCode = data1.current.weather_code;
        let description = data2[weatherCode].day.description;

        document.getElementById('weatherDescription').innerHTML = `${description}`;

        let image = data2[weatherCode].day.image;

        document.getElementById('weatherImg').setAttribute('src', image);
    })

    .catch(error => {
        console.error(error);
    }); 
}


