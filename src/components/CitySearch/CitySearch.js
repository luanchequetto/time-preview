
import { useState } from "react";
import { Button, FormWrapper, Icon, Input, Title } from "./styles";
import iconSearch from "../../assets/search.png";
import { cityData } from "../../services/api";
import { useWeatherContext } from "../../hooks/useWeatherContext";

export const CitySearch = () => {
    const [citySearch, setCitySearch] = useState("");
    const { setCity, setSearchData, setSelectedData, setSelectedCardIndex, preferences, customTheme } = useWeatherContext();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await cityData(citySearch, preferences.units)
        setCity(response.city)
        setSearchData(response.data)
        setSelectedData(undefined)
        setSelectedCardIndex()
    };
    return (
        <div className="wrapper">
            <Title theme={customTheme.theme}>
                <h2>Seja bem Vindo</h2>
                <h2>
                    <span>Selecione uma cidade</span>
                </h2>
            </Title>
            <FormWrapper searchIcon="../..assets/search.png" onSubmit={handleSubmit}>
                <Input
                    theme={customTheme.theme}
                    placeholder="Pesquisar por cidade"
                    value={citySearch}
                    onChange={(e) => setCitySearch(e.target.value)}
                />
                <Button type="submit">
                    <Icon src={iconSearch} alt="search-icon" />
                </Button>
            </FormWrapper>
        </div>
    );
};
