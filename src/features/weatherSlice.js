import { createSlice } from '@reduxjs/toolkit';
import { weatherAPI } from '../services/weatherAPI';

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    unit: 'celcius',
    data: null,
    error: null,
    isLoading: false,
    recentSearches: [
      // city name, temp, weather, wind speed
      ],
  },
  reducers: {
    addRecentSearch(state, action) {
      state.recentSearches = [action.payload, ...state.recentSearches].slice(0, 5);
    },
    setTemperatureUnit(state, action) {
      state.unit = action.payload;
    },
    getRecentSearches(state) {
      return state.recentSearches;
    }

  },
  extraReducers: (builder) => {
    builder
      .addMatcher(weatherAPI.endpoints.getWeatherByCity.matchPending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(weatherAPI.endpoints.getWeatherByCity.matchFulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addMatcher(weatherAPI.endpoints.getWeatherByCity.matchRejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { addRecentSearch } = weatherSlice.actions;
export const fetchWeatherByCity = (city) => (dispatch, getState) => {
  dispatch(weatherAPI.endpoints.getWeatherByCity.initiate(city));
  dispatch(addRecentSearch(city));
};
export const { setTemperatureUnit, getRecentSearches } = weatherSlice.actions;

export default weatherSlice.reducer;


