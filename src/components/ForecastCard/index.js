import { useContext } from "react";
import { WeatherContext } from "../../core/WeatherContext";
import { dateConvert } from "../../utils/date";
import { Card } from "./styles";

export const ForecastCard = ({ item, index }) => {
  const weatherContext = useContext(WeatherContext);
  const weatherIcon = item.weather[0].main.toLowerCase();

  const { customTheme } = weatherContext;

  function handleActive() {
    weatherContext.setSelectedData(item);
    weatherContext.setSelectedCardIndex(index);

    let elements = document.querySelectorAll(".effect");
    elements.forEach((element) => {
      element.classList.add("active");
      setTimeout(() => {
        element.classList.remove("active");
      }, 500);
    });
  }

  return (
    <Card
      onClick={(e) => handleActive(e)}
      theme={customTheme.theme}
      className={weatherContext.selectedCardIndex === index ? "active" : ""}
    >
      <img src={require(`../../assets/${weatherIcon}.png`)} alt="" />
      <span className="week-day">{dateConvert(item.dt)}</span>
      <h2>
        {item.temp.day}{" "}
        {weatherContext.preferences.units === "metric" ? "ºC" : "ºF"}
      </h2>
      <div>
        <span>{item.wind_speed} m/s</span>
        <span>clouds: {item.clouds} %</span>
      </div>
    </Card>
  );
};
