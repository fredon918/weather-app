export default function CurrentWeather() {
  return (
    <div className="current-weather">
      <h2 className="current-weather-info">Québec, QC</h2>
      <h2 className="current-weather-info">23°C</h2>
      <img src="/images/rain.svg" alt="weather condition"></img>
      <h2 className="current-weather-info">Nuageux</h2>
      <p className="current-weather-info">Jeudi 15:30</p>
      <p className="current-weather-info">Vent 50 km/h</p>
      <p className="current-weather-info"> Pression atmosphérique</p>
      <p className="current-weather-info">Humidité 62%</p>
    </div>
  );
}
