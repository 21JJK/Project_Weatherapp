let now = new Date();

let h2 = document.querySelector("#time");

function formatDate(date) {
  let currentDate = now.getDate();
  let currentHours = now.getHours();
  let currentMinutes = now.getMinutes();
  let currentYear = now.getFullYear();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[now.getDay()];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let currentMonth = months[now.getMonth()];

  if (currentHours < 10) {
    currentHours = `0${currentHours}`;
  }

  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }

  return `${currentDay}, ${currentDate}. ${currentMonth} ${currentYear}, ${currentHours}:${currentMinutes}`;
}

h2.innerHTML = formatDate(now) + `<br> covered`;

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");

  let h1 = document.querySelector("h1");
  if (searchInput.value) {
    h1.innerHTML = `${searchInput.value}`;
  } else {
    h1.innerHTML = null;
    alert("please type a city");
  }
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function changeToCelcius(event) {
  event.preventDefault;
  let toFahrenheit = document.querySelector("#temperature");
  toFahrenheit.innerHTML = 17;
}

let clickToCelcius = document.querySelector("#celcius-link");
clickToCelcius.addEventListener("click", changeToCelcius);

function changeToFahrenheit(event) {
  event.preventDefault;
  let toFahrenheit = document.querySelector("#temperature");
  toFahrenheit.innerHTML = 63;
}

let clickToFahrenheit = document.querySelector("#fahrenheit-link");
clickToFahrenheit.addEventListener("click", changeToFahrenheit);
