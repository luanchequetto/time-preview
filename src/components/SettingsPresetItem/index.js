import { useContext } from "react"
import { WeatherContext } from "../../core/WeatherContext"
import { Item } from "./styles"


export const SettingsPresetItem = ({ title, primaryBG, secondBG, sidebarBG, txtPrimaryColor, txtSecondColor }) => {

    const weatherContext = useContext(WeatherContext)

    const { customTheme, setCustomTheme } = weatherContext

    const handleSetTheme = () => {
        setCustomTheme({
            ...weatherContext.customTheme,
            theme: {
                ...weatherContext.customTheme.theme,
                backgroundPrimaryColor: primaryBG,
                backgroundSecondColor: secondBG,
                sidebarColor: sidebarBG,
                textPrimaryColor: txtPrimaryColor,
                textSecondColor: txtSecondColor
            }
        })
    }

    return (
        <Item onClick={e => handleSetTheme()} primaryBG={primaryBG} title={title}>
            <div>
            </div>
        </Item>
    )
}