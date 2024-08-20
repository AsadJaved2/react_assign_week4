import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTemperatureUnit } from '../features/weatherSlice';

function UnitSwitch() {
  const dispatch = useDispatch();
  const unit = useSelector((state) => state.weather.unit);

  const handleUnitChange = (newUnit) => {
    dispatch(setTemperatureUnit(newUnit));
  };

  return (
    <div className="flex justify-center mb-6 pt-6">
      <button
        onClick={() => handleUnitChange('metric')}
        className={`px-4 py-2 border rounded-l-lg ${unit === 'metric' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
      >
        °C
      </button>
      <button
        onClick={() => handleUnitChange('imperial')}
        className={`px-4 py-2 border ${unit === 'imperial' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
      >
        °F
      </button>
      <button
        onClick={() => handleUnitChange('standard')}
        className={`px-4 py-2 border rounded-r-lg ${unit === 'standard' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
      >
        K
      </button>
    </div>
  );
}

export default UnitSwitch;
