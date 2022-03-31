
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=6119109&units=imperial&APPID=6a845f71ff0257569a77605dbb5fb42e";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    let curTemp = jsObject.main.temp;
    let curSpeed = jsObject.wind.speed;
    let windchill = "";
    let alertType = jsObject.alerts.event
    let alertDes = jsObject.alerts.description

    document.querySelector('#current-temp').textContent = Math.round(curTemp);
    document.querySelector('#current-speed').textContent = Math.round(curSpeed);
    document.querySelector('#alertType').innerHTML = alertType;
    document.querySelector('#alertDes').innerHTML = alertDes;
    const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    
  
    




    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
  

  if (curTemp <= 50 && curSpeed > 3) {
    windchill = windChill(curTemp, curSpeed);
    windchill = `${windchill}&#176;F`;
  } else {
    windchill = "N/A";
  }
  
  document.querySelector("#windchill").innerHTML = windchill;

  function windChill(curTemp, curSpeed) {
    var windChill = (35.74 + 0.6215 * curTemp - 35.75 * Math.pow(curSpeed, 0.16) + 0.4275 * curTemp * Math.pow(curSpeed, 0.16)).toFixed(0);
    return windChill;
  }
  });
