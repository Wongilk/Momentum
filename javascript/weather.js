import key from "../Apikey";

const API_KEY = key;

function onSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const area = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      area.innerText = data.name;
      weather.innerText = `${data.weather[0].main} ${data.main.temp}C`;
    });
}
function onFail() {
  alert("can't find where you are");
}
navigator.geolocation.getCurrentPosition(onSuccess, onFail);
