import React, { useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import { useDispatch } from 'react-redux';
import { fetchWeatherByCity } from './features/weatherSlice';
import RecentSearches from './components/RecentSearches';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeatherByCity('Lahore'));
  }, [dispatch]);

  return (
    <div className="app-container">
      <SearchBar />
      <WeatherDisplay />
      <RecentSearches />
    </div>
  );
}

export default App;

