import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({});

  let updateInfo = (result) => {
    setWeatherInfo(result);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}

// let info = {
//     city: "Delhi",
//     feels_like: 24.48,
//     temp: 25.05,
//     temp_min: 25.05,
//     temp_max: 25.05,
//     humidity: 47,
//     weather: "haze",
//   };
