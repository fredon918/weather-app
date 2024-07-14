import { mapCodeToWeatherCondition } from "../WMOMapper";

export default function CurrentWeather({ name, infos }) {
  const options = { weekday: "long", hour: "2-digit", minute: "2-digit" };
  let datetime = new Date(infos.current.time).toLocaleTimeString("fr", options);

  let weatherCondition = mapCodeToWeatherCondition(infos.current.weather_code);
  console.log(weatherCondition);

  return (
    <div className="current-weather">
      <h2 className="current-weather-info">{name}</h2>
      <h2 className="current-weather-info">
        {Math.round(infos.current.temperature_2m)}°C
      </h2>
      {/* <img src={weatherCondition.image} alt={weatherCondition.condition}></img> */}
      {/* <img src="/images/rain.svg" alt="weather condition"></img> */}
      <h2 className="current-weather-info">{weatherCondition.condition}</h2>
      <p className="current-weather-info">{datetime}</p>
      <p className="current-weather-info">
        Vent {Math.round(infos.current.wind_speed_10m)} km/h
      </p>
      <p className="current-weather-info">
        Pression {infos.current.surface_pressure} hPa
      </p>
      <p className="current-weather-info">
        Humidité {infos.current.relative_humidity_2m}%
      </p>
    </div>
  );
}
