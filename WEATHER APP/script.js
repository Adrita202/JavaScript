const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'x-rapidapi-host': 'weather-api167.p.rapidapi.com',
    'x-rapidapi-key': 'bff287d674msh1901b95306f348cp1b117cjsn45cdba511131' 
  }
};

function getWeather() {
  const city = document.getElementById("city").value;
  const url = `https://weather-api167.p.rapidapi.com/api/weather/forecast?place=${encodeURIComponent(city)}&cnt=3&units=standard&type=three_hour&mode=json&lang=en`;

  fetch(url, options)
    .then(response => response.json())
    .then(data => {
      showWeather(data);
    })
    .catch(err => {
      document.getElementById("weather-output").innerHTML = "<p style='color:red;'>Oops! Couldn't fetch the data 😓</p>";
      console.error(err);
    });
}

function showWeather(data) {
  const output = document.getElementById("weather-output");
  output.innerHTML = "";

  if (!data || !data.list || !data.city) {
    output.innerHTML = "No forecast found.";
    return;
  }

  data.list.forEach(forecast => {
    const time = new Date(forecast.dt * 1000).toLocaleString();
    const weather = forecast.weather[0];
    const card = `
      <div class="card">
        <h3>${data.city.name}, ${data.city.country}</h3>
        <p><strong>${time}</strong></p>
        <img src="https://openweathermap.org/img/wn/${weather.icon}@2x.png" alt="${weather.description}">
        <p>${weather.description.toUpperCase()}</p>
        <p>🌡 Temp: ${forecast.main.temp} K (Feels: ${forecast.main.feels_like} K)</p>
        <p>💧 Humidity: ${forecast.main.humidity}%</p>
        <p>🌀 Wind: ${forecast.wind.speed} m/s</p>
        <p>📈 Pressure: ${forecast.main.pressure} hPa</p>
      </div>
    `;
    output.innerHTML += card;
  });
}