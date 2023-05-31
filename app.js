window.addEventListener('load', () => {
    let long;
    let lat;

    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector('.location-timezone');


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            // api key ************************
            // endpoint - subcription plan One call api : https://openweathermap.org/api
            // https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
            // Free endpoint Solucion. https://www.geeksforgeeks.org/python-find-current-weather-of-any-city-using-openweathermap-api/
            // Free endpoint http://api.openweathermap.org/data/2.5/weather?
            // {${lat}}&lon={${long}}
            const key = '1324';
            const api = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API-KEY}`;
            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                const { temperature, summary } = data.currently;
                // Set Dom Elementos de la API
                temperatureDegree.textContent = temperature;
                temperatureDescription.textContent = summary;
                locationTimezone.textContent = data.timezone;

            });
        });

      
    }

});