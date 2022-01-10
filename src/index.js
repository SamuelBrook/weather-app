import getWeatherData from "./fetch-data.js";
import {
  displayWeatherData,
  clearDOMInfo,
  toggleVisibility,
} from "./manipulate-dom.js";

const setUpPage = (() => {
  toggleVisibility();
  getWeatherData("London")
    .then((val) => {
      displayWeatherData(val);
      toggleVisibility();
    })
    .catch((err) => {
      alert("Error finding information, please try again later");
      toggleVisibility();
    });
})();

const getAndDisplayWeather = (() => {
  const form = document.querySelector("form");
  const input = document.querySelector("input");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let searchTerm = input.value;
    toggleVisibility();
    getWeatherData(searchTerm)
      .then((val) => {
        clearDOMInfo();
        displayWeatherData(val);
        toggleVisibility();
      })
      .catch(() => {
        alert("Enter a valid city name");
        toggleVisibility();
      });
  });
})();
