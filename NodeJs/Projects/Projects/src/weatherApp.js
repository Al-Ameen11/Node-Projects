const API_KEY ='0e19b52da6ebd6368a46a87804d344da';

const cityInput = document.getElementById('city-input');
const checkWeatherBtn = document.getElementById('check-weather-btn');
const displayWeatherInfo = document.getElementById('display-weather-info');
const displayCityName = document.getElementById('display-cityName');
const displayTemperature = document.getElementById('display-temparature');
const displayWeather = document.getElementById('display-weather');
const displayError = document.getElementById('display-error');


checkWeatherBtn.addEventListener('click',async ()=>{
  const cityName = cityInput.value.trim();
  if (!cityName) return;


  try {
    let weatherData = await fetchingWeatherData(cityName);
    displayWeatherDetails(weatherData);

  } catch (error) {
    showError();
  }
  
})

async function fetchingWeatherData(cityName){

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

function displayWeatherDetails(weatherData){
  displayCityName.textContent =`City :${weatherData.name}`;
  displayTemperature.textContent =`Temperature : ${(weatherData.main.temp - 273.15).toFixed(2)}℃`;
  displayWeather.textContent =`Weather : ${weatherData.weather[0].description}`;
  displayWeatherInfo.classList.remove('hidden');
  displayError.classList.add('hidden');
}

function showError(){
  displayError.classList.remove('hidden');
  displayWeatherInfo.classList.add('hidden');
}

