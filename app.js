var url="api.openweathermap.org/data/2.5/weather?q=" 
var api=""

var input = document.querySelector(".search-bar")
var button = document.querySelector(".btn-go")
var city = document.querySelector(".city")
var temp = document.querySelector(".temp")
var desc = document.querySelector(".description")
var humid = document.querySelector(".humidity")
var wind  = document.querySelector(".wind")

function serverURL(text)
{
    return url + text + "&units=metric&APPID=" + api;
}


function errorHandler(error)
{
    console.log("error occured", error)
    alert("enter a valid city")
} 


function clickHandler()
{
    var inputtext= input.value

    fetch(serverURL(inputtext))
    .then(response => response.json())
    .then(json => {

        city.innerText = "Weather in " + json.name
        temp.innerText = "Temp: " + json.main.temp + "°C"
        desc.innerText = "Description: " + json.weather.description
        humid.innerText = "Humidity: " + json.main.humidity
        wind.innerText = "Wind Speed: " + json.wind.speed

    

    })
.catch(errorHandler)

}

button.addEventListener("click", clickHandler)
