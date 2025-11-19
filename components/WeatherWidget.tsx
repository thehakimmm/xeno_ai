"use client";

import { useState } from "react";
import { Cloud, CloudRain, Sun, Wind, Droplets } from "lucide-react";
import { getCurrentWeather, WeatherData } from "@/lib/weatherService";

export default function WeatherWidget() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const data = await getCurrentWeather(city);
      setWeather(data);
    } catch (err: any) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const getWeatherIcon = () => {
    if (!weather) return <Cloud className="w-16 h-16 text-gray-400" />;
    
    const desc = weather.description.toLowerCase();
    if (desc.includes('rain')) return <CloudRain className="w-16 h-16 text-blue-400" />;
    if (desc.includes('cloud')) return <Cloud className="w-16 h-16 text-gray-400" />;
    return <Sun className="w-16 h-16 text-yellow-400" />;
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-red-900/20 shadow-xl">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <Cloud className="w-6 h-6 text-red-500" />
        Weather Check
      </h3>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && fetchWeather()}
          placeholder="Enter city name..."
          className="flex-1 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
        />
        <button
          onClick={fetchWeather}
          disabled={loading}
          className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors disabled:opacity-50"
        >
          {loading ? "..." : "Check"}
        </button>
      </div>

      {error && (
        <div className="text-red-400 text-sm mb-4 p-3 bg-red-900/20 rounded-lg">
          {error}
        </div>
      )}

      {weather && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-2xl font-bold text-white">
                {weather.city}, {weather.country}
              </h4>
              <p className="text-gray-400 capitalize">{weather.description}</p>
            </div>
            {getWeatherIcon()}
          </div>

          <div className="text-5xl font-bold text-white">
            {weather.temperature}°C
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-800">
            <div className="flex items-center gap-2">
              <Droplets className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-gray-400 text-xs">Humidity</p>
                <p className="text-white font-semibold">{weather.humidity}%</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Wind className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-gray-400 text-xs">Wind</p>
                <p className="text-white font-semibold">{weather.windSpeed} m/s</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Sun className="w-5 h-5 text-orange-400" />
              <div>
                <p className="text-gray-400 text-xs">Feels Like</p>
                <p className="text-white font-semibold">{weather.feelsLike}°C</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

