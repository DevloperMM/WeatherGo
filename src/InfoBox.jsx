import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ info }) {
  let init_url =
    "https://images.unsplash.com/photo-1717240418752-15f1038656fe?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let hot_url =
    "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let cold_url =
    "https://images.unsplash.com/photo-1641732423736-2c9ebb3e8338?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let rain_url =
    "https://images.unsplash.com/photo-1493314894560-5c412a56c17c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="info-box">
      <div className="card-container">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.city === undefined
                ? init_url
                : info.humidity > 80
                ? rain_url
                : info.temp > 20
                ? hot_url
                : cold_url
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city ? info.city.toUpperCase() : ""} &nbsp;
              {info.city === undefined ? (
                <ThermostatIcon />
              ) : info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 20 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <ul>
                <li>Weather description: {info.weather_type}</li>
                <li>Humidity: {info.humidity}%</li>
                <li>Temperature: {info.temp}&deg;C</li>
                <li>Minimum Temp: {info.temp_min}&deg;C</li>
                <li>Maximum Temp: {info.temp_max}&deg;C</li>
                <li>The weather feels like: {info.feels_like}&deg;C</li>
              </ul>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
