import { createContext, useRef, useState } from "react";
import theme from "../../core/globalTheme";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const user_settings = JSON.parse(localStorage.getItem("user_settings"));
    const [searchData, setSearchData] = useState("");
    const [selectedData, setSelectedData] = useState("");
    const [selectedCardIndex, setSelectedCardIndex] = useState(0);
    const [city, setCity] = useState("");
    const [customTheme, setCustomTheme] = useState(
        user_settings ? user_settings.customTheme : { theme }
    );
    const effectRef = useRef(null)
    console.log("user", user_settings);

    const [preferences, setPreferences] = useState(
        user_settings?.preferences ?? {
            units: "metric",
            lang: "pt_br",
        }
    );

    return (
        <WeatherContext.Provider
            value={{
                searchData,
                city,
                setCity,
                setSearchData,
                preferences,
                setPreferences,
                selectedData,
                setSelectedData,
                selectedCardIndex,
                setSelectedCardIndex,
                customTheme,
                setCustomTheme,
                effectRef
            }}
        >
            {children}
        </WeatherContext.Provider>
    );
};
