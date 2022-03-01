import { useContext } from "react"
import { WeatherContext } from "../../core/WeatherContext"
import { Item } from "./styles"


export const SettingsPreferenceItem = ({ title, property, options }) => {

    const weatherContext = useContext(WeatherContext)
    const { preferences, setPreferences } = weatherContext

    return (
        <Item>
            <div>
                <label>
                    {title}
                </label>
                <div className="itens">
                    <select value={preferences[property]} onChange={(e) => {
                                        setPreferences({
                                            ...weatherContext.preferences, [property]: e.target.value }
                                        )
                                    }}>
                        {options.map((param) => {
                            return (
                                <option key={param.value} value={param.value}
                                    >
                                    {param.title}
                                </option>
                            )
                        })}
                    </select>
                </div>
            </div>
        </Item>
    )
}