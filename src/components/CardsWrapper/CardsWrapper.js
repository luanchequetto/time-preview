import { useContext } from "react";
import { WeatherContext } from "../../core/WeatherContext";
import { ForecastCard } from "../ForecastCard";
import { CardsTitle, Wrapper } from "./styles";

export const CardsWrapper = () => {
    const weatherContext = useContext(WeatherContext);

    const data = weatherContext.searchData;

    return data ? (
        <>
            <CardsTitle>Previsão da Semana:</CardsTitle>
            <Wrapper>
                {data.daily.map((item, index) => {
                    return <ForecastCard key={index} index={index} item={item} />;
                })}
            </Wrapper>
        </>
    ) : (
        <>
            <CardsTitle>Previsão da Semana:</CardsTitle>
            <Wrapper />
        </>
    );
};
