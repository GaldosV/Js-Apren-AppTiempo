window.addEventListener('load', () => {
    let long;
    let lat;

    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector('.location-timezone');
    let temperatureSection = document.querySelector('.temperature');
    const temperatureSpan = document.querySelector(".temperature span");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            // api key ************************
            const key = '1324';
            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}https://api.darksky.net/forecast/${key}/${lat},${long}`;
            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                const { temperature, summary, icon } = data.currently;
                // Set Dom Elementos de la API
                temperatureDegree.textContent = temperature;
                temperatureDescription.textContent = summary;
                locationTimezone.textContent = data.timezone;
                //Formula de farenheit - celsius
                let celsius = (temperature - 32) * (5 / 9);

                // Set icon
                setIcons(icon, document.querySelector('.icon'));
                // Cambiar la temperatura a celsius de farenheit
                temperatureSection.addEventListener('click', () => { 
                    if (temperatureSpan.textContent === "F") { 
                        temperatureSpan.textContent = "C";
                        temperatureDegree.textContent = Math.floor(celsius); 
                    } else {
                        temperatureSection.textContent = "F";
                        temperatureDegree.textContent = temperature;
                     }

                })
                

            });
        });

      
    }
    // Selector de iconos de tiempo sacados de Skycons https://github.com/darkskyapp/skycons
    function setIcons(icon, iconID) { 
        const skycons = new Skycon({ color: "white" });
        // Modifica cada espacio con un underscore para que pueda recoger los datos y tranformarlos para que se recojan
        const currentIcon = icon.replace(/-/g, "_").toUppercase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }
});