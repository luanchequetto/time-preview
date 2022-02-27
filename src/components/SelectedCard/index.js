import { useContext } from "react"
import { useTheme } from "styled-components"
import { WeatherContext } from "../../core/WeatherContext"
import { dateConvert } from "../../utils/date"
import { handleDegConvert } from "../../utils/degConvert"
import { SelectedInfoItem } from "../SelectedInfoItem"
import { CardHeader, CardTemperature, Item, SomeInfos, TemperatureWrapper, Wrapper } from "./styles"

export const SelectedCard = () => {

    const weatherContext = useContext(WeatherContext)

    const preferences = weatherContext.preferences
    var data;
    if(weatherContext.selectedData){
        data = weatherContext.selectedData
    }else{
        let allData = weatherContext.searchData
        data = allData && allData.current
    }
    
    const theme = useTheme()

    console.log('theme', theme)

    const temperatureBackground = require("../../assets/cloud-background.png")
    const weatherIcon = data ? data.weather[0].main.toLowerCase() : "clouds"

    return (
        <Wrapper>
            <CardHeader className="effect">
                <div>
                    <p>{data ? dateConvert(data.dt, "weekdayfull") : ""}</p>
                    <h2>{weatherContext.city ? weatherContext.city : ""}</h2>
                </div>
                <img src={require(`../../assets/${weatherIcon}-dark.png`)} alt="icon"></img>
            </CardHeader>

            <CardTemperature className="effect">
                <TemperatureWrapper bg={temperatureBackground} unit={preferences.units === "metric" ? "ºC" : "ºF"}>
                    <h2>{data ? parseInt(data.temp.day ? data.temp.day : data.temp) : "0"}</h2>
                    <p>{data ? data.weather[0].description[0].toUpperCase() + data.weather[0].description.substr(1) : ""}</p>
                    <p>{data ? dateConvert(data.dt, "fulldate") : ""}</p>
                </TemperatureWrapper>
            </CardTemperature >

            <SomeInfos className="effect">
                {data ?
                    <ul>
                        <SelectedInfoItem title={'Wind'} data={`${data.wind_speed} m/s, ${handleDegConvert(data.wind_deg)} (${data.wind_deg})`} />
                        <SelectedInfoItem title={"Cloudiness"} data={data.weather[0].description[0].toUpperCase() + data.weather[0].description.substr(1)} />
                        <SelectedInfoItem title={"Pressure"} data={`${data.pressure} hpa`} />
                        <SelectedInfoItem title={"Humidity"} data={`${data.humidity} %`} />
                        <SelectedInfoItem title={"Sunrise"} data={dateConvert(data.sunrise, "cardsInfo")} />
                        <SelectedInfoItem title={"Sunset"} data={dateConvert(data.sunset, "cardsInfo")} />
                        <SelectedInfoItem title={"Geo coords"} data={`[${parseFloat(weatherContext.searchData.lat).toFixed(2)}, ${parseFloat(weatherContext.searchData.lon).toFixed(2)}]`} />
                    </ul>
                    :
                    <></>
                }

            </SomeInfos>
        </Wrapper>
    )
}