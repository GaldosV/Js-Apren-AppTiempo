window.addEventListener('load', () => {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            // api key 3730bad6ec5c33687f45723e87d33115
            // https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
            // {${lat}}&lon={${long}}
            const api = `https://api.openweathermap.org/data/3.0/onecall?{${lat}}&lon={${long}}&exclude={hourly}&appid={3730bad6ec5c33687f45723e87d33115}`;
            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
            });
        });

      
    }

});