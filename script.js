const input = document.querySelector("input")
const searchBtn = document.querySelector("#search-btn");
const errorMsg = document.querySelector("#error")
const icon = document.querySelector(".icon");
const weather = document.querySelector(".weather");
const temprature = document.querySelector(".temprature");
const discription = document.querySelector(".discription");

const apiKey = '3a6a3b9ff0f4395cbea6a0d82d0d3f21';
const api_Url = 'https://api.openweathermap.org/data/2.5/weather';

searchBtn.addEventListener("click", () => {
    let city = input.value;

    if (!city == city) {
        errorMsg.style.display = "none";
    }

    getWeather(city);
})

async function getWeather(city) {
    let response = await fetch(`${api_Url}?q=${city}&appid=${apiKey}`);
    let result = await response.json();

    const iconCode = result.weather[0].icon;
    icon.innerHTML = `<img  src="https://openweathermap.org/img/wn/${iconCode}.png" />`;

    const weatherCity = result.name
    const weatherCountry = result.sys.country;
    weather.innerHTML = `${weatherCity}, ${weatherCountry}`;

    let weatherTemp = result.main.temp;
    weatherTemp = weatherTemp - 273;
    const temp = weatherTemp.toFixed(2);
    temprature.innerHTML = `${Math.floor(temp)}°C`;

    const weatherDesc = result.weather[0].description;
    discription.innerHTML = weatherDesc;

    return result;
}
