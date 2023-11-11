 const apikey ="cc0a845638cae13ec80f304a96cbb51b";

 const weatherDataE1 =document.getElementById("weather-data");

 const cityInputE1 = document.getElementById("city-input");

 const formE1 = document.querySelector("form");

 formE1.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityValue = cityInputE1.Value;
//   console.log(cityValue);
  getWeatherData(cityValue);
 });

 async function getWeatherData (cityValue){
    try{ 
         const response = await fetch(`https://api.openweathermap.org/data/3.0/weather?q=${cityValue}&appid=${apikey}&units=metric`);


         if(!response.ok){
            throw new Error("Network response was not ok");
         }
         const data = await response.json();
        //  console.log(data);

         const temperature = Math.round(data.main.temp);

         const description = data.weather[0].description;

         const icon = data.weathrt[0].icon;

         const details = [
            `Feels Like: ${Math.round(data.main.temp)}`
            `Humidity: ${data.main.humidity}%`
            `Wind Speed: ${data.main.speed}m/s`
        ];
        weatherDataE1.querySelector( ".icon" ).innerHTML =  `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;

            weatherDataE1.querySelector(
                ".temperature"
            ).textContent = `${temperature} °C`;
            weatherDataE1.querySelector(".description").textContent = description;

            weatherDataE1.querySelector(".details").innerHTML = details.map((detail) => `<div>${detail}<div>`)

            .join("");
            

    } catch (error) {
            weatherDataE1.querySelector(".icon").innerHTML = "";
            weatherDataE1.querySelector( ".temperature").textContent = "";
            weatherDataE1.querySelector(".description").textContent = "An Error happened,please try again later";

            weatherDataE1.querySelector(".details").innerHTML="" ;
    }
 }

