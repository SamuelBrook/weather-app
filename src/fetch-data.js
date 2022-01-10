async function getWeatherData(cityName) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4edfb59f5bfcf1af7802721ab2c0c219`,
    { mode: "cors" }
  );
  const weatherData = await response.json();
  let temps = getTemperature(weatherData);
  let weather = getWeather(weatherData);
  let name = weatherData.name;

  let locationWeather = new Weather(
    name,
    temps.temp,
    temps.maxTemp,
    temps.minTemp,
    weather.mainWeather,
    weather.weatherDescription
  );

  return locationWeather;
}

const getTemperature = (weatherData) => {
  let temp = roundHalf(weatherData.main.temp - 273.15) + "°C";
  let maxTemp = roundHalf(weatherData.main.temp_max - 273.15) + "°C";
  let minTemp = roundHalf(weatherData.main.temp_min - 273.15) + "°C";
  return { temp, maxTemp, minTemp };
};

const getWeather = (weatherData) => {
  let mainWeather = weatherData.weather[0].main;
  let weatherDescription = weatherData.weather[0].description;
  return { mainWeather, weatherDescription };
};

const roundHalf = (num) => {
  return Math.round(num * 2) / 2;
};

class Weather {
  constructor(name, temp, maxTemp, minTemp, weather, weatherDescription) {
    this.name = name;
    this.temp = temp;
    this.maxTemp = maxTemp;
    this.minTemp = minTemp;
    this.weather = weather;
    this.weatherDescription = weatherDescription;
  }
}

export default getWeatherData;
