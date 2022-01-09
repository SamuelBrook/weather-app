import getWeatherData from "./fetch-data.js";
import displayWeatherData from "./manipulate-dom.js";

const form = document.querySelector("form");
const input = document.querySelector("input");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let searchTerm = input.value;
  getWeatherData(searchTerm).then((val) => {
    console.log(val);
    displayWeatherData(val);
    //use await here rather than then(), look at video for details
  });
});
