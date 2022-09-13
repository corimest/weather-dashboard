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
        localStorage.setItem("city", JSON.stringify(city))
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

    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&APPID=" + apiKey;
    axios.get(apiUrl)
        .then(function (response) {
            console.log(response); 
            cityNameEl.innerHTML= new Date(response.data.dt * 1000); 
            dateEl.innerHTML = response.data.dt;
            cityIconEl.setAttribute("src", "https://openweathermap.org/img/wn/" + response.data.weather[0].icon + "@2x.png");
            tempEl.innerHTML = "Current Temperature: " + response.data.main.temp + " degrees";
            humidityEl.innerHTML = "Current Humidity: " + response.data.main.humidity + " %";
            windEl.innerHTML = "Current Wind Speed: " + response.data.wind.speed + " MPH";
        })
}; 


var forecastWeather = function(cityName) {

    var forecastApiURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=" + apiKey;
    axios.get(forecastApiURL)
        .then(function (response) {
            // 1st card
            var dateEl = document.querySelector("#future-date"); 
            var cityIconEl = document.querySelector("#future-icon"); 
            var tempEl = document.querySelector("#future-temp"); 
            var humidityEl = document.querySelector("#future-humidity"); 
            var windEl = document.querySelector("#future-wind"); 

            console.log(response); 
            dateEl.innerHTML = response.data.list[6].dt_txt
            cityIconEl.setAttribute("src", "https://openweathermap.org/img/wn/" + response.data.list[6].weather[0].icon + "@2x.png"); 
            tempEl.innerHTML = "Temperature: " + response.data.list[6].main.temp + " degrees"; 
            humidityEl.innerHTML = "Humidity: " + response.data.list[6].main.humidity + " %";
            windEl.innerHTML = "Wind Speed: " + response.data.list[6].wind.speed + " MPH"; 

            //2nd card
            var date1El = document.querySelector("#future-date-1"); 
            var cityIcon1El = document.querySelector("#future-icon-1"); 
            var temp1El = document.querySelector("#future-temp-1"); 
            var humidity1El = document.querySelector("#future-humidity-1"); 
            var wind1El = document.querySelector("#future-wind-1"); 

            date1El.innerHTML = response.data.list[14].dt_txt
            cityIcon1El.setAttribute("src", "https://openweathermap.org/img/wn/" + response.data.list[14].weather[0].icon + "@2x.png"); 
            temp1El.innerHTML = "Temperature: " + response.data.list[14].main.temp + " degrees"; 
            humidity1El.innerHTML = "Humidity: " + response.data.list[14].main.humidity + " %";
            wind1El.innerHTML = "Wind Speed: " + response.data.list[14].wind.speed + " MPH"; 

            //3rd card
            var date2El = document.querySelector("#future-date-2"); 
            var cityIcon2El = document.querySelector("#future-icon-2"); 
            var temp2El = document.querySelector("#future-temp-2"); 
            var humidity2El = document.querySelector("#future-humidity-2"); 
            var wind2El = document.querySelector("#future-wind-2"); 

            date2El.innerHTML = response.data.list[22].dt_txt
            cityIcon2El.setAttribute("src", "https://openweathermap.org/img/wn/" + response.data.list[22].weather[0].icon + "@2x.png"); 
            temp2El.innerHTML = "Temperature: " + response.data.list[22].main.temp + " degrees"; 
            humidity2El.innerHTML = "Humidity: " + response.data.list[22].main.humidity + " %";
            wind2El.innerHTML = "Wind Speed:" + response.data.list[22].wind.speed + " MPH"; 

            //4th card
            var date3El = document.querySelector("#future-date-3"); 
            var cityIcon3El = document.querySelector("#future-icon-3"); 
            var temp3El = document.querySelector("#future-temp-3"); 
            var humidity3El = document.querySelector("#future-humidity-3"); 
            var wind3El = document.querySelector("#future-wind-3"); 

            date3El.innerHTML = response.data.list[30].dt_txt
            cityIcon3El.setAttribute("src", "https://openweathermap.org/img/wn/" + response.data.list[30].weather[0].icon + "@2x.png"); 
            temp3El.innerHTML = "Temperature: " + response.data.list[30].main.temp + " degrees"; 
            humidity3El.innerHTML = "Humidity: " + response.data.list[30].main.humidity + " %";
            wind3El.innerHTML = "Wind Speed: " + response.data.list[30].wind.speed + " MPH"; 

            //5th card
            var date4El = document.querySelector("#future-date-4"); 
            var cityIcon4El = document.querySelector("#future-icon-4"); 
            var temp4El = document.querySelector("#future-temp-4"); 
            var humidity4El = document.querySelector("#future-humidity-4"); 
            var wind4El = document.querySelector("#future-wind-4"); 

            date4El.innerHTML = response.data.list[38].dt_txt
            cityIcon4El.setAttribute("src", "https://openweathermap.org/img/wn/" + response.data.list[38].weather[0].icon + "@2x.png"); 
            temp4El.innerHTML = "Temperature: " + response.data.list[38].main.temp + " degrees"; 
            humidity4El.innerHTML = "Humidity: " + response.data.list[38].main.humidity + " %";
            wind4El.innerHTML = "Wind Speed: " + response.data.list[38].wind.speed + " MPH"; 

            })
};


userFormEl.addEventListener("submit", formSubmitHandler)