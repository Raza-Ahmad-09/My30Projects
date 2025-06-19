const apiKey = "2981ca9a99150cb626122046a49498d0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
 
async function checkweather(city) {
   const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

   if(response.status == 404){
    alert("Invalid City Name! Please Enter a valid city name");
    document.querySelector(".weather").style.display = "none";
   }
   var data = await response.json();
   console.log(data)
   document.querySelector(".city").innerHTML = data.name;
   document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "°C";
   document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
   document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

   if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
   }else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "images/clear.png"
   }else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "images/rain.png"
   }else if(data.weather[0].mian == "Drizzle"){
    weatherIcon.src = "images/drizzle.png"
   }else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "images/mist.png"
   }else if(data.weather[0].main == "Snow"){
    weatherIcon.src = "images/snow.png"
   }

   document.querySelector(".weather").style.display = "block"
}

searchBtn.addEventListener("click" , () => {
    checkweather(searchBox.value);
})

searchBox.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkweather(searchBox.value);
    }
});
