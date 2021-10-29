const apiKey = ''
// link for city search current forcast
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// link for zipcode search current forcast (will default to United States with no country code added)
// api.openweathermap.org/data/2.5/weather?zip={zip code}&appid={API key}


const testApiWeather = async() =>{
    let zipCode = '84120'
    let result = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${apiKey}&units=imperial`, {
        method: 'GET' 
});
    let response = await result.json();
    console.log(response)
}

const testApiForcast = async() =>{
    let zipCode = '84120'
    let result = await fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&appid=${apiKey}&units=imperial`, {
        method: 'GET' 
});
    let response = await result.json();
    console.log(response)
}

const getWeather = async() =>{
    let zipCode = document.querySelector('#input-zipcode')
    fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode.value}&appid=${apiKey}&units=imperial`)
    .then(response => response.json())
    .then(weather_data => {
        let today = document.getElementById(`today-in`);
        today.innerHTML = `Today In: ${weather_data.name}`;
        document.getElementById("td-img-1").src=`http://openweathermap.org/img/wn/${weather_data.weather[0].icon}@2x.png`;
        let status = document.getElementById(`td-status-1`);
        status.innerHTML = `${weather_data.weather[0].main}`;
        let temp_now = document.getElementById(`td-temp-now`);
        temp_now.innerHTML = `${Math.round(weather_data.main.temp)}°F`;
        let temp_hi = document.getElementById(`td-temp-hi`);
        temp_hi.innerHTML = `High: ${Math.round(weather_data.main.temp_max)}°F`;
        let temp_low = document.getElementById(`td-temp-low`);
        temp_low.innerHTML = `Low: ${Math.round(weather_data.main.temp_min)}°F`;
        let temp_feel = document.getElementById(`td-temp-feel`);
        temp_feel.innerHTML = `Feels Like: ${Math.round(weather_data.main.feels_like)}°F`;
        let humidity = document.getElementById(`td-humidity`);
        humidity.innerHTML = `Humidity: ${weather_data.main.humidity}%`;
        let wind_speed = document.getElementById(`td-wind-speed`);
        wind_speed.innerHTML = `Wind Speed: ${Math.round(weather_data.wind.speed)} MPH`;
        let wind_gust = document.getElementById(`td-wind-gust`);
        wind_gust.innerHTML = `Wind Gusts: ${Math.round(weather_data.wind.gust)} MPH`;
        });
    fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode.value}&appid=${apiKey}&units=imperial`)
    .then(response => response.json())
    .then(weather_data => {
        document.getElementById(`fd-0-0`).src=`http://openweathermap.org/img/wn/${weather_data.list[4].weather[0].icon}@2x.png`;
        let status = document.getElementById(`fd-0-1`);
        status.innerHTML = `${weather_data.list[4].weather[0].main}`;
        let temp_high = document.getElementById(`fd-0-2`);
        temp_high.innerHTML = `High: ${Math.round(weather_data.list[4].main.temp_max)}°F`;
        let temp_low = document.getElementById(`fd-0-3`);
        temp_low.innerHTML = `Low: ${Math.round(weather_data.list[4].main.temp_min)}°F`;
        let wind_speed = document.getElementById(`fd-0-4`);
        wind_speed.innerHTML = `Winds: ${weather_data.list[4].wind.speed} MPH`;
        document.getElementById(`fd-1-0`).src=`http://openweathermap.org/img/wn/${weather_data.list[12].weather[0].icon}@2x.png`;
        status = document.getElementById(`fd-1-1`);
        status.innerHTML = `${weather_data.list[12].weather[0].main}`;
        temp_high = document.getElementById(`fd-1-2`);
        temp_high.innerHTML = `High: ${Math.round(weather_data.list[12].main.temp_max)}°F`;
        temp_low = document.getElementById(`fd-1-3`);
        temp_low.innerHTML = `Low: ${Math.round(weather_data.list[12].main.temp_min)}°F`;
        wind_speed = document.getElementById(`fd-1-4`);
        wind_speed.innerHTML = `Winds: ${weather_data.list[12].wind.speed} MPH`;
        document.getElementById(`fd-2-0`).src=`http://openweathermap.org/img/wn/${weather_data.list[20].weather[0].icon}@2x.png`;
        status = document.getElementById(`fd-2-1`);
        status.innerHTML = `${weather_data.list[20].weather[0].main}`;
        temp_high = document.getElementById(`fd-2-2`);
        temp_high.innerHTML = `High: ${Math.round(weather_data.list[20].main.temp_max)}°F`;
        temp_low = document.getElementById(`fd-2-3`);
        temp_low.innerHTML = `Low: ${Math.round(weather_data.list[20].main.temp_min)}°F`;
        wind_speed = document.getElementById(`fd-2-4`);
        wind_speed.innerHTML = `Winds: ${weather_data.list[20].wind.speed} MPH`;
        document.getElementById(`fd-3-0`).src=`http://openweathermap.org/img/wn/${weather_data.list[28].weather[0].icon}@2x.png`;
        status = document.getElementById(`fd-3-1`);
        status.innerHTML = `${weather_data.list[28].weather[0].main}`;
        temp_high = document.getElementById(`fd-3-2`);
        temp_high.innerHTML = `High: ${Math.round(weather_data.list[28].main.temp_max)}°F`;
        temp_low = document.getElementById(`fd-3-3`);
        temp_low.innerHTML = `Low: ${Math.round(weather_data.list[28].main.temp_min)}°F`;
        wind_speed = document.getElementById(`fd-3-4`);
        wind_speed.innerHTML = `Winds: ${weather_data.list[28].wind.speed} MPH`;
        document.getElementById(`fd-4-0`).src=`http://openweathermap.org/img/wn/${weather_data.list[36].weather[0].icon}@2x.png`;
        status = document.getElementById(`fd-4-1`);
        status.innerHTML = `${weather_data.list[36].weather[0].main}`;
        temp_high = document.getElementById(`fd-4-2`);
        temp_high.innerHTML = `High: ${Math.round(weather_data.list[36].main.temp_max)}°F`;
        temp_low = document.getElementById(`fd-4-3`);
        temp_low.innerHTML = `Low: ${Math.round(weather_data.list[36].main.temp_min)}°F`;
        wind_speed = document.getElementById(`fd-4-4`);
        wind_speed.innerHTML = `Winds: ${weather_data.list[36].wind.speed} MPH`;          
    });
}
// image icon link from api
// http://openweathermap.org/img/wn/10d@2x.png