import { Home } from "./pages/Home";
import "./core/axiosConfig"
import { WeatherProvider } from "./core/WeatherContext";
import { GlobalStyle } from "./core/globalStyle";



function App() {
  return (

    <WeatherProvider>
      <GlobalStyle />
      <Home />
    </WeatherProvider>

  );
}

export default App;
