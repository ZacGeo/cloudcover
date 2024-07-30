import { Animation } from "../components/eve/Eve";
import {
  getCurrentTheme,
  welcomeTimeTheme,
} from "../components/usefulFunctions/TimeTheme";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { WeatherContext } from "../components/context/Context";

export const Welcome = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  const [location, setLocation] = useState("Athens");
  const [theme] = useState(getCurrentTheme());
  const { weatherData, setWeatherData } = useContext(WeatherContext);

  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(true);
    }, 3000); // Match the duration of the animation
    return () => clearTimeout(timer);
  }, []);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const fetchData = async (loc) => {
    try {
      console.log("Fetching weather data at location: " + loc);
      const nameResult = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${loc}&count=5&language=en&format=json`
      );
      const nameData = await nameResult.json();
      const latitude = nameData.results[0].latitude || null;
      const longitude = nameData.results[0].longitude || null;

      if (!nameData || !latitude || !longitude) {
        console.log("There was a problem...");
        return;
      }

      // Elsewhere, there are results
      const locResult = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,cloud_cover,visibility,wind_speed_10m,wind_speed_80m,wind_direction_10m,wind_direction_80m&daily=uv_index_max`
      );
      const locData = await locResult.json();

      setWeatherData(locData);
    } catch (e) {
      console.error(e);
    }
  };

  const handleSubmit = async () => {
    await fetchData(location);
    navigate("/information");
  };

  useEffect(() => {
    console.log('HELLO BITHCASSOHE');

    fetchData(location);
  }, []);

  return (
    <>
      {showWelcome ? (
        <div
          style={{ backgroundColor: theme.background, color: theme.color }}
          className="flex flex-col items-center justify-start min-h-screen pt-32 h-screen"
        >
          {welcomeTimeTheme()}
          <div className="relative z-10">
            <h1 className="text-8xl mb-12 font-bold">CLOUDCOVER</h1>
            <p className="mt-12 font-semibold ml-12">
              Enter the location that you wish to see the weather
            </p>
            <input
              type="text"
              className="mt-6 ml-12 p-2 border text-black rounded w-1/2"
              placeholder="Enter some text"
              value={location}
              onChange={handleLocationChange}
            />
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      ) : (
        <Animation onEnd={() => setShowWelcome(true)} />
      )}
    </>
  );
};
