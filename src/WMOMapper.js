export function mapCodeToWeatherCondition(code) {
  switch (code) {
    case "0":
      return { condition: "Ensolleilé", image: "/images/clear-sky-day.svg" };
    case "1":
    case "2":
    case "3":
      return {
        condition: "Partiellement ensolleilé",
        image: "/images/few-clouds-day.svg",
      };

    case "61":
    case "63":
    case "65":
    case "66":
    case "67":
    case "80":
    case "81":
    case "82":
      return {
        condition: "Pluie",
        image: "/images/rain.svg",
      };

    case "71":
    case "73":
    case "75":
    case "77":
    case "85":
    case "86":
      return {
        condition: "Neige",
        image: "/images/snow.svg",
      };
    default:
      return { condition: "", image: "" };
  }
}
