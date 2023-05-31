window.addEventListener('load', () => {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            // api key 3730bad6ec5c33687f45723e87d33115
            // endpoint - subcription plan One call api : https://openweathermap.org/api
            // https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
            // {${lat}}&lon={${long}}
            const key = '3730bad6ec5c33687f45723e87d33115';
            const api = `https://api.openweathermap.org/data/3.0/onecall?{${lat}}&lon={${long}}&exclude={hourly}&appid={${key}}`;
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