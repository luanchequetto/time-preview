
import { useContext, useState } from "react";
import { Button, FormWrapper, Icon, Input, Title } from "./styles";
import iconSearch from "../../assets/search.png";
import { WeatherContext } from "../../core/WeatherContext";
import { cityData } from "../../services/api";

export const CitySearch = () => {
  const [citySearch, setCitySearch] = useState("");
  const weatherContext = useContext(WeatherContext);
  const { customTheme } = weatherContext;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await cityData(citySearch, weatherContext.preferences.units)
    weatherContext.setCity(response.city)
    weatherContext.setSearchData(response.data)
    weatherContext.setSelectedData(undefined)
    weatherContext.setSelectedCardIndex()
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
