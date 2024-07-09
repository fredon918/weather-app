export default function WeekWeather() {
  return (
    <div>
      {/* Getter la liste de toute les journées ici et les print avec un .map() 
        Faire un handleClick et ramener à App.js. Si on click sur une image, ça ouvre à droite de l'écran les détails de la journée cliquée. 
        Un autre click et ça disparait
      */}
      <h1>WEEK WEATHER</h1>
      <p>Jour de la semaine</p>
      <img src="soleil/nuage" alt="soleil.. nuage..."></img>
      <p>Température en celcius</p>
      <p>État du ciel</p>
    </div>
  );
}
