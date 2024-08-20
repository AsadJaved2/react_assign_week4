import { useSelector } from "react-redux";
import { getRecentSearches } from "../features/weatherSlice";

export default function RecentSearches() {
  const result = useSelector(getRecentSearches);

  console.log(result); // Check what the actual structure of 'result' is.

  return (
    <div className="max-w-md mx-auto mt-4 bg-white shadow-md rounded-lg p-4">
      <h1 className="font-bold">Recents</h1>
      {result.payload && result.payload.weather && Array.isArray(result.payload.weather.recentSearches) ? (
        <ul className="list-disc space-y-2 pl-5">
          {result.payload.weather.recentSearches.map((item, index) => (
            <li key={index} className="text-gray-700">
              <p>{item}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No recent searches available.</p>
      )}
    </div>
  );
}
