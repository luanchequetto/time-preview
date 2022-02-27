import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const WeatherContext = createContext()

export const WeatherProvider = ({ children }) =>{

    const [searchData ,setSearchData] = useState()
    const [selectedData ,setSelectedData] = useState()
    const [selectedCardIndex ,setSelectedCardIndex] = useState()
    const [city, setCity] = useState()

    const [preferences, setPreferences] = useState({
        units: "metric"
    })

    return(
        <WeatherContext.Provider value={{searchData, city, setCity, setSearchData, preferences, setPreferences, selectedData, setSelectedData, selectedCardIndex, setSelectedCardIndex}}>
            {children}
        </WeatherContext.Provider>
    )
}