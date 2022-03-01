import { useContext } from "react"
import { WeatherContext } from "../../core/WeatherContext"
import { Item } from "./styles"


export const SettingsColorItem = ({ title, property }) => {

    const weatherContext = useContext(WeatherContext)

    const { customTheme, setCustomTheme } = weatherContext

    return (
        <Item>
            <div>
                <label>
                    {title}
                </label>
                <input type='color' value={weatherContext.customTheme.theme[property]}
                    onChange={(e) => {
                        setCustomTheme({
                            ...weatherContext.customTheme,
                            theme: { ...weatherContext.customTheme.theme, [property]: e.target.value }
                        })
                    }}
                >
                </input>
            </div>
        </Item>
    )
}