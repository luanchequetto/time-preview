import { Home } from "./pages/Home";
import "./core/axiosConfig"
import { WeatherProvider } from "./core/WeatherContext";
import { GlobalStyle } from "./core/globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./core/globalTheme";



function App() {
  return (
    <ThemeProvider theme={theme}>
      <WeatherProvider>
        <GlobalStyle />
        <Home />
      </WeatherProvider>
    </ThemeProvider>
  );
}

export default App;
