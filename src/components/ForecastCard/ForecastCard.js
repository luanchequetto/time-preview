import { useWeatherContext } from "../../hooks/useWeatherContext";
import { dateConvert } from "../../utils/date";
import { Card } from "./styles";

export const ForecastCard = ({ item, index }) => {
    const {customTheme, setSelectedCardIndex, setSelectedData, preferences, selectedCardIndex, effectRef} = useWeatherContext();
    const weatherIcon = item.weather[0].main.toLowerCase();
    function handleActive() {
        setSelectedData(item);
        setSelectedCardIndex(index);
        effectRef.current.className = effectRef.current.className + ' active'
        setTimeout(() => {   
            effectRef.current.className = effectRef.current.className.replace(' active', '')
        }, 1500);
    }

    return (
        <Card
            onClick={(e) => handleActive(e)}
            theme={customTheme.theme}
            className={selectedCardIndex === index ? "active" : ""}
        >
            <img src={require(`../../assets/${weatherIcon}.png`)} alt="" />
            <span className="week-day">{dateConvert(item.dt)}</span>
            <h2>
                {item.temp.day}{" "}
                {preferences.units === "metric" ? "ºC" : "ºF"}
            </h2>
            <div>
                <span>{item.wind_speed} m/s</span>
                <span>clouds: {item.clouds} %</span>
            </div>
        </Card>
    );
};
