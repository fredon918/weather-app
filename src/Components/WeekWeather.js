import SummaryDay from "./SummaryDay";

export default function WeekWeather() {
  return (
    /* Getter la liste de toute les journées ici et les printer*/
    <ul className="week-weather">
      <SummaryDay></SummaryDay>
      <SummaryDay></SummaryDay>
      <SummaryDay></SummaryDay>
      <SummaryDay></SummaryDay>
    </ul>
  );
}
