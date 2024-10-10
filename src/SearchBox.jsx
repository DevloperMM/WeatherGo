import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [err, setErr] = useState(false);

  let url = "https://api.openweathermap.org/data/2.5/weather";
  let api_url = "https://api.openweathermap.org/geo/1.0/direct";
  let api_key = import.meta.env.VITE_KEY;

  let getWeatherInfo = async () => {
    try {
      setErr(false);

      let data = await fetch(`${api_url}?q=${city}&appid=${api_key}`);
      let jsonData = await data.json();
      let lat = jsonData[0].lat;
      let lon = jsonData[0].lon;

      let res = await fetch(
        `${url}?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`
      );
      let jsonRes = await res.json();

      let result = {
        city: city,
        temp: jsonRes.main.temp,
        temp_min: jsonRes.main.temp_min,
        temp_max: jsonRes.main.temp_max,
        humidity: jsonRes.main.humidity,
        feels_like: jsonRes.main.feels_like,
        weather_type: jsonRes.weather[0].description,
      };

      return result;
    } catch (e) {
      setErr(true);
      return {};
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    let info = await getWeatherInfo();
    setCity("");
    updateInfo(info);
  };

  return (
    <div className="search-box">
      <h3>Search for the Weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="Search Your City"
          variant="filled"
          required
          value={city}
          onChange={handleChange}
        />
        <div className="search-btn">
          <Button variant="contained" endIcon={<SendIcon />} type="submit">
            Search
          </Button>
        </div>

        {err && (
          <p style={{ color: "red", fontWeight: "bold" }}>
            <i>No such place exists !!</i>
          </p>
        )}
      </form>
    </div>
  );
}
