import SearchBar from "./Components/SearchBar";
import CurrentWeather from "./Components/CurrentWeather";
import WeekWeather from "./Components/WeekWeather";
import HourlyWeather from "./Components/HourlyWeather";

export default function App() {
  return (
    <div className="container">
      <SearchBar></SearchBar>
      <CurrentWeather></CurrentWeather>
      <WeekWeather></WeekWeather>
      <HourlyWeather></HourlyWeather>
    </div>
  );
}
