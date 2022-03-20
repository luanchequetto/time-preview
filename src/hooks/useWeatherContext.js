import { useContext } from "react"
import { WeatherContext } from "../core/WeatherContext"


export const useWeatherContext = () => {
    const context = useContext(WeatherContext)
    return context
}