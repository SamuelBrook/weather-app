const clouds = document.createElement("img");
clouds.src = "../src/images/clouds.svg";

const fewClouds = document.createElement("img");
fewClouds.src = "../src/images/clouds-few.svg";

const sun = document.createElement("img");
sun.src = "../src/images/sun.svg";

const rain = document.createElement("img");
rain.src = "../src/images/rain.svg";

const thunder = document.createElement("img");
thunder.src = "../src/images/thunder.svg";

const snow = document.createElement("img");
snow.src = "../src/images/snow.svg";

const mist = document.createElement("img");
mist.src = "../src/images/mist.svg";

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

export default displayWeatherData;
