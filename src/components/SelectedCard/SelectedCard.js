import { useMemo } from "react";
import { useWeatherContext } from "../../hooks/useWeatherContext";
import { dateConvert } from "../../utils/date";
import { handleDegConvert } from "../../utils/degConvert";
import { SelectedInfoItem } from "../SelectedInfoItem";
import {
    CardHeader,
    CardTemperature,
    SomeInfos,
    TemperatureWrapper,
    Wrapper,
} from "./styles";

export const SelectedCard = () => {
    const { preferences, selectedData, searchData, city, effectRef } = useWeatherContext();

    const units = useMemo(() => {
        let unit = preferences.units === "metric" ? "ºC" : "ºF"
        return unit
    }, [preferences])

    var data;
    if (selectedData) {
        data = selectedData;
    } else {
        let allData = searchData;
        data = allData && allData.current;
    }

    const temperatureBackground = require("../../assets/cloud-background.png");
    const weatherIcon = data ? data.weather[0].main.toLowerCase() : "clouds";


    return (
        <Wrapper className={!data && "hidden"} ref={effectRef}>
            <CardHeader className="effect-1">
                <div>
                    <p>{data && dateConvert(data.dt, "weekdayfull")}</p>
                    <h2>{city && city}</h2>
                </div>
                <img
                    src={require(`../../assets/${weatherIcon}-dark.png`)}
                    alt="icon"
                />
            </CardHeader>

            <CardTemperature className={`effect-2`}>
                <TemperatureWrapper
                    bg={temperatureBackground}
                    unit={units}
                >
                    <h2>
                        {data && parseInt(data.temp.day ?? data.temp)}
                    </h2>
                    <p>
                        {data && data.weather[0].description[0].toUpperCase() + data.weather[0].description.substr(1)}
                    </p>
                    <p>{data && dateConvert(data.dt, "fulldate")}</p>
                </TemperatureWrapper>
            </CardTemperature>

            <SomeInfos className="effect-3">
                {data && (
                    <ul>
                        <SelectedInfoItem
                            title={"Vento"}
                            data={`${data.wind_speed} m/s, ${handleDegConvert(
                                data.wind_deg
                            )} (${data.wind_deg})`}
                        />
                        <SelectedInfoItem
                            title={"Nebulosidade"}
                            data={
                                data.weather[0].description[0].toUpperCase() +
                                data.weather[0].description.substr(1)
                            }
                        />
                        <SelectedInfoItem
                            title={"Pressão atmosférica"}
                            data={`${data.pressure} hpa`}
                        />
                        <SelectedInfoItem title={"Umidade"} data={`${data.humidity} %`} />
                        <SelectedInfoItem
                            title={"Nascer do Sol"}
                            data={dateConvert(data.sunrise, "cardsInfo")}
                        />
                        <SelectedInfoItem
                            title={"Pôr do Sol"}
                            data={dateConvert(data.sunset, "cardsInfo")}
                        />
                        <SelectedInfoItem
                            title={"Coordenatas"}
                            data={`[${parseFloat(searchData.lat).toFixed(
                                2
                            )}, ${parseFloat(searchData.lon).toFixed(2)}]`}
                        />
                    </ul>
                )}
            </SomeInfos>
        </Wrapper>
    );
};
