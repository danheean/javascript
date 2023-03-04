// const API_KEY = "971e8be5d526e76615d00f43a29ac0ba";
// const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";
const API_KEY = "a52a820b5bb250ddab02197936d7ebf2";

// https://api.openweathermap.org/data/2.5/weather?lat=37.551465757709735&lon=127.04415396894176&appid=971e8be5d526e76615d00f43a29ac0ba
function onGeoSuccess(position) {
  const lat = position.coords.latitude; // .toFixed(4);
  const lon = position.coords.longitude; // .toFixed(4);

  // console.log("you live in", lat, lon);

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data.name, data.weather[0].main);
      const weatherContainer = document.querySelector("#weather");
      const weather = weatherContainer.querySelector("span:first-child");
      const city = weatherContainer.querySelector("span:last-child");

      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });

  // console.log(url);
}

function onGeoError() {
  alert("Can't find you, No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
