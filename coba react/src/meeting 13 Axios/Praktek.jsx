import React, { useEffect, useState } from "react";
import axios from "axios";

function CobaAxios() {
  const [weather, setWeather] = useState(null); // Menyimpan data cuaca

  useEffect(() => {
    const fetchWeather = async () => {
      const API_URL = "https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current_weather=true";
      try {
        const response = await axios.get(API_URL);
        setWeather({
          temperature: response.data.current_weather.temperature,
          windSpeed: response.data.current_weather.windspeed,
        });
      } catch (error) {
        console.error("Gagal mengambil data cuaca:", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h2>Cuaca di London</h2>
      {weather ? (
        <>
          <p><strong>Suhu:</strong> {weather.temperature}°C</p>
          <p><strong>Kecepatan Angin:</strong> {weather.windSpeed} km/h</p>
        </>
      ) : (
        <p>Memuat data...</p>
      )}
    </div>
  );
}

export default CobaAxios;
