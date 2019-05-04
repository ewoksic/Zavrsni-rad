let appId = "108f6547a8199c51eea80ecc0bafd9fc";
let units = "metric";
let searchMethod;

function getSearchMethod(searchTerm) {
    if (searchTerm.length === 5 && Number.parseInt(searchTerm) + "" === searchTerm)
        searchMethod = "zip";
    else
        searchMethod = "q";
}

function searchWeather(searchTerm) {
    getSearchMethod(searchTerm);
    fetch(`https://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`).then(result => {
        return result.json();
    }).then(result => {
        init(result);
    });
}

function init(resultFromServer) {    
    let weatherDescriptionHeader = document.getElementById("weatherDescriptionHeader");
    let temperatureElement = document.getElementById("temperature");
    let huminityElement = document.getElementById("huminity");
    let whindSpeedElement = document.getElementById("whindSpeed");    
    let weatherIcon = document.getElementById("documentIconImg");
    weatherIcon.src = "http://openweathermap.org/img/w/" + resultFromServer.weather[0].icon + ".png";
    let resultDescription = resultFromServer.weather[0].description;
    weatherDescriptionHeader.innerText = resultDescription.charAt(0).toUpperCase() + resultDescription.slice(1);
    temperatureElement.innerHTML = resultFromServer.main.temp + "&#176";
    whindSpeedElement.innerHTML = "Winds at " + resultFromServer.wind.speed + "m/s";    
    huminityElement.innerHTML = "Humidity levels are " + resultFromServer.main.humidity + " %";
    
}

let searchTerm = "belgrade"
searchWeather(searchTerm);
