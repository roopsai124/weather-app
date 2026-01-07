const apiKey = "a1b2c3d4e5f6g7h8i9";  // Replace with your API key

function getWeather() {
    const city = document.getElementById("city").value;

    if (city === "") {
        alert("Please enter city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                document.getElementById("result").innerHTML = "City not found ❌";
            } else {
                document.getElementById("result").innerHTML = `
                    <h3>${data.name}</h3>
                    <p>🌡️ Temperature: ${data.main.temp} °C</p>
                    <p>☁️ Weather: ${data.weather[0].description}</p>
                    <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
                `;
            }
        })
        .catch(() => {
            document.getElementById("result").innerHTML = "Error fetching weather";
        });
}
