let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};



// let askAboutCity = prompt("Enter a city")


function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 1.8) + 32;
    return fahrenheit;
}

console.log(celsiusToFahrenheit(19));

function greeting(name) {
console.log(`Hello ${name}!`);
}
greeting("Paul");

function updateCurrentCity(newCityName) {
  let current_city = document.querySelector("#current-city");
  current_city.innerHTML = newCityName;
}

function updateDetails(time, weather_status, humidity, wind) {
  let current_details = document.querySelector("#current-details");
  current_details.innerHTML = `${time}, ${weather_status} <br />
    Humidity: <strong>${humidity}%</strong>, Wind: <strong>${wind}km/h</strong>`;
}

function getTodaysTime() {
  let date = new Date();
  let options = {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
  };
  return date.toLocaleTimeString("en-us", options);
}

function search_trigger(event) {
  event.preventDefault();
  let input = document.querySelector("#search_bar_input");
  updateDetails(getTodaysTime(), `windy`, "67", "999");
  updateCurrentCity(input.value);
}
let form_input = document.querySelector("form");
form_input.addEventListener("submit", search_trigger);

function search_button(event) {
  event.preventDefault();
  let input = document.querySelector("#search_bar_button");
}
let form_button = document.querySelector("form");
form_button.addEventListener("submit", search_button);

//
function displayUsername(response){
  console.log(response.data.name);
  let h1 = document.querySelector("h1")
  h1.innerHTML = `Hi ${response.data.name}`
}
let apiUrl =  "https://jsonplaceholder.typicode.com/users/1";
axios.get(apiUrl).then(displayUsername);