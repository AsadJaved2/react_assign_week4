import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRecentSearch } from '../features/weatherSlice';
import { fetchWeatherByCity } from '../features/weatherSlice';

function SearchBar() {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      dispatch(fetchWeatherByCity(city));
      addRecentSearch(city);
      setCity('');
    }

  };

  return (
    <form className="flex justify-center items-center my-6" onSubmit={handleSearch}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="w-80 px-4 py-2 border-2 border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;

