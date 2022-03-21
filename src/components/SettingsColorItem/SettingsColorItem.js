import { useWeatherContext } from "../../hooks/useWeatherContext";
import { Item } from "./styles";

export const SettingsColorItem = ({ title, property }) => {
    const {setCustomTheme, customTheme} = useWeatherContext();

    return (
        <Item>
            <div>
                <label>{title}</label>
                <input
                    type="color"
                    value={customTheme.theme[property]}
                    onChange={(e) => {
                        setCustomTheme({
                            ...customTheme,
                            theme: {
                                ...customTheme.theme,
                                [property]: e.target.value,
                            },
                        });
                    }}
                />
            </div>
        </Item>
    );
};
