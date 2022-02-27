import { useContext } from "react"
import { WeatherContext } from "../../core/WeatherContext"
import { dateConvert } from "../../utils/date"
import { Card } from "./styles"

export const ForecastCard = (props) => {
    const weatherContext = useContext(WeatherContext)
    const weatherIcon = props.item.weather[0].main.toLowerCase()

    function handleActive(e){
        weatherContext.setSelectedData(props.item)
        
    }

    return (
        <Card onClick={(e) => weatherContext.setSelectedData(props.item)}>
            <img src={require(`../../assets/${weatherIcon}.png`)} alt="" />
            <span className="week-day">{dateConvert(props.item.dt)}</span>
            <h2>{props.item.temp.day} ºC</h2>
            <div>
            <span>{props.item.wind_speed} m/s</span>
            <span>clouds: {props.item.clouds} %</span>
            </div>
        </Card>
    )
}