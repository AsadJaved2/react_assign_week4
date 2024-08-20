import React from 'react';
import { useSelector } from 'react-redux';
import UnitSwitch from './UnitSwitch';

function WeatherDisplay() {
  const { data, error, isLoading } = useSelector((state) => state.weather);
  const { unit } = useSelector((state) => state.weather);


  if (isLoading) {
    return <p className="text-center text-lg font-semibold">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-lg text-red-500">Error fetching weather data: {error}</p>;
  }

  var temperature = data?.main.temp;
  // it returns the temperature in celcius
  if (unit === 'imperial') {
    // convert to fahrenheit
    temperature = (temperature * 9) / 5 + 32;
    // round of the temperature to 2 decimal places
    temperature = Math.round(temperature * 100) / 100;
  } else if (unit === 'standard') {
    // convert to kelvin
    temperature = temperature + 273.15;
    // round of the temperature to 2 decimal places
    temperature = Math.round(temperature * 100) / 100;
  }

  var myunit = '°C';
  if (unit === 'imperial') {
    myunit = '°F';
  } else if (unit === 'standard') {
    myunit = 'K';
  }

  return (
    <div className="text-center mt-10">
      {data ? (
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">{data.name}</h2>
          <p className="text-xl">Temperature: {temperature}{myunit}</p>
          <p className="text-xl">Weather: {data.weather[0].description}</p>
          <p className="text-xl">Wind Speed: {data.wind.speed} m/s</p>
          <UnitSwitch />
        </div>
      ) : (
        <p className="text-xl">No weather data available</p>
      )}
    </div>
  );
}

export default WeatherDisplay;

