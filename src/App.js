import SearchBar from "./Components/SearchBar";
import CurrentWeather from "./Components/CurrentWeather";
import WeekWeather from "./Components/WeekWeather";
import HourlyWeather from "./Components/HourlyWeather";
import { useEffect, useState } from "react";
import { mapCodeToWeatherCondition } from "./WMOMapper";

export default function App() {
  const [latitude, setLatitude] = useState("46.815567");
  const [longitude, setLongitude] = useState("-71.22348");
  const [name, setName] = useState("Québec");
  const [infos, setInfos] = useState(null);

  useEffect(() => {
    getWeatherFromApiAsync();
  }, [latitude, longitude, name]);

  async function getWeatherFromApiAsync() {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,surface_pressure,wind_speed_10m,wind_direction_10m&hourly=temperature_2m&timezone=auto`
    );
    const data = await res.json();
    setInfos(data);
  }

  function handleSubmitLocation(location) {
    setLatitude(location.latitude);
    setLongitude(location.longitude);
    setName(location.name);
  }

  if (infos !== null) {
    return (
      <div className="container">
        <SearchBar onSubmitLocation={handleSubmitLocation}></SearchBar>
        <CurrentWeather name={name} infos={infos}></CurrentWeather>
        <WeekWeather></WeekWeather>
        <HourlyWeather></HourlyWeather>
      </div>
    );
  }
}
