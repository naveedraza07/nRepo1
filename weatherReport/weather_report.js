function showweatherDetailsByCity(event) {
    event.preventDefault();
    // const lon = document.getElementById('lon').value;
    // const lat = document.getElementById('lat').value;
    const city = document.getElementById('city').value;
    const apiKey = 'c4f86ece00bc8aa272652ac9065af12d'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    // const apiUrl2 = `https://api.openweathermap.org/data/2.5/weather?lon=${lon}&lat=${lat}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
       
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `${data}`;
     weatherInfo.innerHTML =   `<h2>Weather in ${data.name}</h2>
                              <p>Temperature: ${data.main.temp} &#8451; , feels like: ${data.main.feels_like}</p>
                              <p>Weather: ${data.weather[0].description}</p>
                              <p>Coordinates: ${data.coord.lon},  ${data.coord.lat} </p>`                       
                              ;

    const jsonText = JSON.stringify(data);
    // weatherInfo.innerHTML = `<p>${data.coord}</p>`;
    //   weatherInfo.innerHTML = `<p>${jsonText}</p>`;
    })
    .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
      });
   
}


function showweatherDetailsByCoord(event) {
    event.preventDefault();


    const lon = document.getElementById('lon').value;
    const lat = document.getElementById('lat').value;
    const apiKey = 'c4f86ece00bc8aa272652ac9065af12d'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lon=${lon}&lat=${lat}&appid=${apiKey}&units=metric`;


    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
       
      const weatherInfo = document.getElementById('weatherInfo');
    //   weatherInfo.innerHTML = `${data}`;
     weatherInfo.innerHTML =   `<h2>Weather in ${data.name}</h2>
                              <p>Temperature: ${data.main.temp} &#8451; , feels like: ${data.main.feels_like}</p>
                              <p>Weather: ${data.weather[0].description}</p>
                              <p>Coordinates: ${data.coord.lon},  ${data.coord.lat} </p>`                       
                              ;

    const jsonText = JSON.stringify(data);
    // weatherInfo.innerHTML = `<p>${data.coord}</p>`;
    // weatherInfo.innerHTML = `<p>${jsonText}</p>`;

    // weatherInfo.innerHTML = `<p>hello world</p>`;
    })
    .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
      });
   
}

document.getElementById('submitByCity').addEventListener('click',showweatherDetailsByCity );
document.getElementById('submitByCoord').addEventListener('click',showweatherDetailsByCoord );