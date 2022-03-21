import { useWeatherContext } from "../../hooks/useWeatherContext";
import { ForecastCard } from "../ForecastCard";
import { CardsTitle, Wrapper } from "./styles";

export const CardsWrapper = () => {
    const {searchData} = useWeatherContext();

    return searchData ? (
        <>
            <CardsTitle>Previsão da Semana:</CardsTitle>
            <Wrapper>
                {searchData.daily.map((item, index) => {
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
