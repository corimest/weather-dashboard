var apiKey = "4ceacaa305b967fb1568090d45b08496"; 
var userFormEl = document.querySelector("#city-search"); 
var nameInputEl = document.querySelector("#city"); 
var cityName = nameInputEl.value.trim(); 
var currentContainerEl = document.querySelector("#current-container"); 




var formSubmitHandler = function(event) {
    event.preventDefault(); 
    //get value from input
    var city = nameInputEl.value.trim(); 

    if(city) { 
        getWeather(city); 
        forecastWeather(city);
    } else {
        alert("Please enter a city"); 
    }
}; 

var getWeather = function(cityName) {
    var cityNameEl = document.querySelector("#city-name");
    var dateEl = document.querySelector("#date");
    var cityIconEl = document.querySelector("#current-icon"); 
    var tempEl = document.querySelector("#temp"); 
    var humidityEl = document.querySelector("#humidity"); 
    var windEl = document.querySelector("#wind"); 
    var uvEl = document.querySelector("#uv"); 

    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=" + apiKey;
    axios.get(apiUrl)
        .then(function (response) {
            console.log(response); 
            cityNameEl.innerHTML= response.data.name; 
            dateEl.innerHTML = response.data.dt;
            cityIconEl.setAttribute("src", "https://openweathermap.org/img/wn/" + response.data.weather[0].icon + "@2x.png");
            tempEl.innerHTML = "Current Temperature: " + response.data.main.temp + "degrees";
            humidityEl.innerHTML = "Current Humidity: " + response.data.main.humidity + "%";
            windEl.innerHTML = "Current Wind Speed: " + response.data.wind.speed + "MPH";
        })
}; 


var forecastWeather = function(cityName) {
    var dateEl = document.querySelector("#future-date"); 
    var cityIconEl = document.querySelector("#future-icon"); 
    var tempEl = document.querySelector("#future-temp"); 
    var humidityEl = document.querySelector("#future-humidity"); 
    var windEl = document.querySelector("#future-wind"); 

    var forecastApiURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey;
    axios.get(forecastApiURL)
        .then(function (response) {
            console.log(response); 
            dateEl.innerHTML = response.data.list[0].dt_txt
            cityIconEl.setAttribute("src", "https://openweathermap.org/img/wn/" + response.data.list[0].weather[0].icon + "@2x.png"); 
            tempEl.innerHTML = "Temperature" + response.data.list[0].temp + "degrees"; 
            humidityEl.innerHTML = "Humidity" + response.data.list[0].humidity + "%";
            windEl.innerHTML = "Wind Speed:" + response.data.list[0].speed + "MPH"; 
                    
            })
};


userFormEl.addEventListener("submit", formSubmitHandler)