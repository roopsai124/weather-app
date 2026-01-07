const apiKey = "a1b2c3d4e5f6g7h8i9";


function getWeather() {
    const city = document.getElementById("city").value;

    if (!city) {
        alert("Enter city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.cod !== 200) {
                document.getElementById("result").innerHTML = data.message;
                return;
            }

            document.getElementById("result").innerHTML = `
                <h3>${data.name}</h3>
                <p>🌡️ ${data.main.temp} °C</p>
                <p>☁️ ${data.weather[0].description}</p>
                <p>💨 ${data.wind.speed} m/s</p>
            `;
        })
        .catch(err => {
            document.getElementById("result").innerHTML = "Unable to fetch weather ❌";
            console.error(err);
        });
}
