import sunIcon from "..src/images/sun.svg";
import cloudsIcon from "./images/clouds.svg";
import cloudsFewIcon from "./images/clouds-few.svg";
import mistIcon from "./images/mist.svg";
import rainIcon from "./images/rain.svg";
import snowIcon from "./images/snow.svg";
import thunderIcon from "./images/thunder.svg";

const clouds = document.createElement("img");
clouds.src = cloudsIcon;

const fewClouds = document.createElement("img");
fewClouds.src = cloudsFewIcon;

const sun = document.createElement("img");
sun.src = sunIcon;

const rain = document.createElement("img");
rain.src = rainIcon;

const thunder = document.createElement("img");
thunder.src = thunderIcon;

const snow = document.createElement("img");
snow.src = snowIcon;

const mist = document.createElement("img");
mist.src = mistIcon;

const getWeatherIcon = (weatherData) => {
  const picture = document.querySelector("#picture");
  if (weatherData.weather === "Clear") {
    picture.appendChild(sun);
  } else if (weatherData.weatherDescription === "few clouds") {
    picture.appendChild(fewClouds);
  } else if (
    weatherData.weatherDescription === "scattered clouds" ||
    weatherData.weatherDescription === "broken clouds" ||
    weatherData.weatherDescription === "overcast clouds"
  ) {
    picture.appendChild(clouds);
  } else if (
    weatherData.weather === "Rain" ||
    weatherData.weather === "Drizzle"
  ) {
    picture.appendChild(rain);
  } else if (weatherData.weather === "Thunderstorm") {
    picture.appendChild(thunder);
  } else if (weatherData.weather === "Snow") {
    picture.appendChild(snow);
  } else {
    picture.appendChild(mist);
  }
};

const toggleVisibility = () => {
  const displayBox = document.querySelector("#display-box");
  displayBox.classList.toggle("visibility");

  const loader = document.querySelector("#loader");
  loader.classList.toggle("display");
};

const clearDOMInfo = () => {
  const picture = document.querySelector("#picture");
  const img = document.querySelector("img");
  const temp = document.querySelector("#temp");
  const min = document.querySelector("#min");
  const max = document.querySelector("#max");

  picture.removeChild(img);
  while (temp.firstChild) {
    temp.removeChild(temp.firstChild);
  }
  while (min.firstChild) {
    min.removeChild(min.firstChild);
  }
  while (max.firstChild) {
    max.removeChild(max.firstChild);
  }
};

const displayWeatherData = (weatherData) => {
  const location = document.querySelector("#location");
  location.textContent = weatherData.name;

  const description = document.querySelector("#description");
  description.textContent = weatherData.weatherDescription;

  getWeatherIcon(weatherData);

  const temp = document.querySelector("#temp");
  const min = document.querySelector("#min");
  const max = document.querySelector("#max");

  const temperature = document.createElement("div");
  const temperatureLabel = document.createElement("div");
  temp.appendChild(temperatureLabel);
  temp.appendChild(temperature);
  temperatureLabel.textContent = "Current";
  temperature.textContent = weatherData.temp;

  const temperatureMin = document.createElement("div");
  const minLabel = document.createElement("div");
  min.appendChild(minLabel);
  min.appendChild(temperatureMin);
  temperatureMin.textContent = weatherData.minTemp;
  minLabel.textContent = "Min";

  const temperatureMax = document.createElement("div");
  const maxLabel = document.createElement("div");
  max.appendChild(maxLabel);
  max.appendChild(temperatureMax);
  temperatureMax.textContent = weatherData.maxTemp;
  maxLabel.textContent = "Max";
};

export { displayWeatherData, clearDOMInfo, toggleVisibility };
