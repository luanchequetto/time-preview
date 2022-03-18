
import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { CardsWrapper } from "../../components/CardsWrapper";
import { CitySearch } from "../../components/CitySearch";
import { SelectedCard } from "../../components/SelectedCard";
import { Sidebar } from "../../components/Sidebar";
import { WeatherContext } from "../../core/WeatherContext";
import { Container, PageWrapper } from "./styles";

export const Home = () => {
  const weatherContext = useContext(WeatherContext);
  const { theme } = weatherContext.customTheme;

  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <Sidebar />
        <Container>
          <CitySearch />
          <CardsWrapper />
        </Container>
        <SelectedCard />
      </PageWrapper>
    </ThemeProvider>
  );
};
