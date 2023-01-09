const API_KEY = `2035d75895dc3fc37469c13508195825`;

const loadTemperature = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}

const displayTemperature = data =>{
    console.log(data.main.temp);
    const temperature = document.getElementById('temperature')
    temperature.innerText = data.main.temp;
}

loadTemperature('dhaka')
