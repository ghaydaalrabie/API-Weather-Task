

// Using fetch to get data

const country = document.querySelector("#country");

country.addEventListener("change", function () {
  var APIKey = "3acfec2af5bd5a2d2684f06be057c731";
  var dubai;
  var destnation = country.value;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${destnation}&appid=3acfec2af5bd5a2d2684f06be057c731&units=metric`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);

      document.querySelector(".wind .value").innerHTML =
        data.wind.speed + " km/h";
      document.querySelector(".humidity .value").innerHTML =
        data.main.humidity + " %";

      document.querySelector(".pressure .value").innerHTML =
        data.main.pressure + " %";

      document.querySelector(".date-container .location ").innerHTML =
        country.value;

      const d = new Date();

      document.querySelector(".date-container .date-dayname").innerHTML =
        d.toLocaleString("en-us", { weekday: "long" });

      let date = `${d}`.split(" ");
      document.querySelector(".date-day").innerHTML =
        date[2] + " " + date[1] + " " + date[3];

      document.querySelector(".weather-desc").innerHTML = data.weather[0].main;

      document.querySelector(".weather-temp").innerHTML =
        Math.round(data.main.temp) + " °C";
    });
});
