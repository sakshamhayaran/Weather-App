const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const apikey = "2dd0f4682fa8d23711b4073fd295e4d5";
const btn = document.querySelector("#btn");
let cityname = document.querySelector("#cityname");

async function getWeather(cityname) {
    const response = await fetch(apiurl+`&q=${cityname}`+`&appid=${apikey}`);
    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather-details").style.display = "none";
    }
    else {
        const data = await response.json();

        document.querySelector(".city").innerText = data.name;
        document.querySelector(".temp").innerText = Math.round(data.main.temp) + " °C";
        document.querySelector(".humidity").innerText = data.main.humidity + "%";
        document.querySelector(".wind").innerText = data.wind.speed + "km/hr";

        if(data.weather[0].main == "Clear")
        {
            document.querySelector(".image").src = "clear.png";
            document.querySelector(".container").style.background = "linear-gradient(135deg,#fef5c6,orange)";
        }
        else if(data.weather[0].main == "Clouds")
        {
            document.querySelector(".image").src = "clouds.png";
            document.querySelector(".container").style.background = "linear-gradient(135deg,#ffff7c,#49c3f7)";
        }
        else if(data.weather[0].main == "Drizzle") {
            document.querySelector(".image").src = "drizzle.png";
            document.querySelector(".container").style.background = "linear-gradient(135deg,white,lightskyblue)";
        }
        else if(data.weather[0].main == "Rain") {
            document.querySelector(".image").src = "rain.png";
            document.querySelector(".container").style.background = "linear-gradient(135deg,grey,lightskyblue)";
        }
        else if(data.weather[0].main == "Mist") {
            document.querySelector(".image").src = "mist.png";
            document.querySelector(".container").style.background = "linear-gradient(135deg,white,grey)";
        }
        else if(data.weather[0].main == "Snow") {
            document.querySelector(".image").src = "snow.png";
            document.querySelector(".container").style.background = "linear-gradient(135deg,white,skyblue)";
        }

        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather-details").style.display = "block";
    }
}

btn.addEventListener("click",()=>{
    getWeather(cityname.value);
})