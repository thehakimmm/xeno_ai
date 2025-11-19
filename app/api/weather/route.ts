import { NextRequest, NextResponse } from "next/server";
import { getCurrentWeather, getWeatherForecast } from "@/lib/weatherService";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const city = searchParams.get('city');
    const forecast = searchParams.get('forecast') === 'true';

    if (!city) {
      return NextResponse.json(
        { error: "City parameter is required" },
        { status: 400 }
      );
    }

    if (forecast) {
      const forecastData = await getWeatherForecast(city);
      return NextResponse.json({ forecast: forecastData });
    } else {
      const weatherData = await getCurrentWeather(city);
      return NextResponse.json({ weather: weatherData });
    }
  } catch (error: any) {
    console.error("Weather API error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch weather data" },
      { status: 500 }
    );
  }
}

