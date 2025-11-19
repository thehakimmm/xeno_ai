import axios from 'axios';

export interface WeatherData {
  temperature: number;
  feelsLike: number;
  humidity: number;
  description: string;
  icon: string;
  windSpeed: number;
  city: string;
  country: string;
}

export interface ForecastData {
  date: string;
  temp: number;
  description: string;
  icon: string;
}

/**
 * Get current weather for a city
 * Uses OpenWeatherMap API (free tier: 1000 calls/day)
 */
export async function getCurrentWeather(city: string): Promise<WeatherData> {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY || process.env.WEATHER_API_KEY;
  
  if (!apiKey) {
    throw new Error('Weather API key not configured');
  }

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          q: city,
          appid: apiKey,
          units: 'metric', // Use Celsius
        },
      }
    );

    const data = response.data;

    return {
      temperature: Math.round(data.main.temp),
      feelsLike: Math.round(data.main.feels_like),
      humidity: data.main.humidity,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      windSpeed: data.wind.speed,
      city: data.name,
      country: data.sys.country,
    };
  } catch (error: any) {
    if (error.response?.status === 404) {
      throw new Error(`City "${city}" not found`);
    }
    throw new Error('Failed to fetch weather data');
  }
}

/**
 * Get 5-day weather forecast
 */
export async function getWeatherForecast(city: string): Promise<ForecastData[]> {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY || process.env.WEATHER_API_KEY;
  
  if (!apiKey) {
    throw new Error('Weather API key not configured');
  }

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast`,
      {
        params: {
          q: city,
          appid: apiKey,
          units: 'metric',
        },
      }
    );

    // Get one forecast per day (at noon)
    const forecasts = response.data.list
      .filter((item: any) => item.dt_txt.includes('12:00:00'))
      .slice(0, 5)
      .map((item: any) => ({
        date: item.dt_txt.split(' ')[0],
        temp: Math.round(item.main.temp),
        description: item.weather[0].description,
        icon: item.weather[0].icon,
      }));

    return forecasts;
  } catch (error) {
    throw new Error('Failed to fetch forecast data');
  }
}

/**
 * Get weather by coordinates (latitude, longitude)
 */
export async function getWeatherByCoords(lat: number, lon: number): Promise<WeatherData> {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY || process.env.WEATHER_API_KEY;
  
  if (!apiKey) {
    throw new Error('Weather API key not configured');
  }

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          lat,
          lon,
          appid: apiKey,
          units: 'metric',
        },
      }
    );

    const data = response.data;

    return {
      temperature: Math.round(data.main.temp),
      feelsLike: Math.round(data.main.feels_like),
      humidity: data.main.humidity,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      windSpeed: data.wind.speed,
      city: data.name,
      country: data.sys.country,
    };
  } catch (error) {
    throw new Error('Failed to fetch weather data');
  }
}

