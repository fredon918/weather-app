export default function SummaryDay() {
  return (
    // Click apparaît, re-click disparaît
    // ajouter un OnClick, et passer le Day vers WeekWeather, et ensuite App.js
    <li>
      <p className="current-weather-info">Vendredi</p>
      <img src="/images/broken-clouds.svg" alt="soleil.. nuage..."></img>
      <p>-8°C</p>
      <p>Neige</p>
    </li>
  );
}
