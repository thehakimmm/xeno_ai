# XenoAI Features & Libraries

## 🎯 Installed Libraries

### Core AI
- **@google/genai** - Official Gemini AI SDK for chat and content generation
- **react-markdown** - Render markdown responses from AI
- **react-syntax-highlighter** - Code syntax highlighting in chat

### Weather & Data
- **axios** - HTTP client for API requests
- **date-fns** - Modern date/time utilities
- **@tanstack/react-query** - Data fetching and caching

### UI & Visualization
- **recharts** - Responsive charts and graphs
- **lucide-react** - Beautiful icon library (1000+ icons)
- **@tailwindcss/typography** - Typography styles for markdown

---

## 🌤️ Weather Features

### Setup Weather API

1. **Get Free API Key** from OpenWeatherMap:
   - Visit: https://openweathermap.org/api
   - Sign up (free tier: 1000 calls/day)
   - Copy your API key

2. **Add to Environment** (`.env.local`):
   ```bash
   NEXT_PUBLIC_WEATHER_API_KEY=your_key_here
   ```

3. **Restart server**:
   ```bash
   npm run dev
   ```

### Usage

#### In Chat
Ask XenoAI:
- "What's the weather in London?"
- "Show weather forecast for Tokyo"
- "Temperature in New York?"

#### As Widget
Use the `WeatherWidget` component:
```tsx
import WeatherWidget from "@/components/WeatherWidget";

<WeatherWidget />
```

#### Programmatically
```typescript
import { getCurrentWeather, getWeatherForecast } from "@/lib/weatherService";

// Get current weather
const weather = await getCurrentWeather("London");

// Get 5-day forecast
const forecast = await getWeatherForecast("London");
```

---

## 📊 Available Features

### 1. **Charts & Graphs** (Recharts)
```tsx
import { LineChart, Line, XAxis, YAxis } from 'recharts';

<LineChart data={data}>
  <Line type="monotone" dataKey="value" stroke="#dc2626" />
</LineChart>
```

### 2. **Icons** (Lucide React)
```tsx
import { Cloud, Sun, Moon, Star } from 'lucide-react';

<Cloud className="w-6 h-6 text-blue-500" />
```

### 3. **Date Formatting** (date-fns)
```typescript
import { format, formatDistance } from 'date-fns';

format(new Date(), 'PPP'); // "November 19, 2025"
formatDistance(new Date(), futureDate); // "in 3 days"
```

### 4. **Data Fetching** (React Query)
```tsx
import { useQuery } from '@tanstack/react-query';

const { data, isLoading } = useQuery({
  queryKey: ['weather', city],
  queryFn: () => getCurrentWeather(city),
});
```

---

## 🚀 Predictive Features You Can Add

### 1. **Stock Market Prediction**
- Use Alpha Vantage API (free tier)
- Display charts with Recharts
- Show trends and predictions

### 2. **Weather Forecasting**
- ✅ Already implemented!
- 5-day forecast available
- Temperature trends

### 3. **News Trends**
- NewsAPI (free tier)
- Analyze sentiment
- Visualize trends

### 4. **Crypto Price Tracking**
- CoinGecko API (free)
- Real-time prices
- Historical charts

### 5. **Sports Scores**
- The Sports DB API
- Live scores
- Match predictions

### 6. **Location-Based Services**
- Google Maps API
- IP geolocation
- Nearby places

---

## 📦 Quick Install Commands

```bash
# Weather & Data
npm install axios date-fns

# Visualization
npm install recharts lucide-react

# Data Management
npm install @tanstack/react-query

# All at once (already installed!)
npm install axios date-fns recharts lucide-react @tanstack/react-query
```

---

## 🔑 API Keys Needed

| Service | Purpose | Free Tier | Sign Up |
|---------|---------|-----------|---------|
| **Gemini** | AI Chat | ✅ 1500/day | [Get Key](https://aistudio.google.com/app/apikey) |
| **OpenWeatherMap** | Weather | ✅ 1000/day | [Get Key](https://openweathermap.org/api) |
| **Alpha Vantage** | Stocks | ✅ 25/day | [Get Key](https://www.alphavantage.co/) |
| **NewsAPI** | News | ✅ 100/day | [Get Key](https://newsapi.org/) |
| **CoinGecko** | Crypto | ✅ Unlimited | [Docs](https://www.coingecko.com/api) |

---

## 💡 Example Use Cases

### Weather Dashboard
```tsx
<WeatherWidget />
{/* Shows current weather with icons */}
```

### Data Visualization
```tsx
<LineChart data={temperatureData}>
  <Line dataKey="temp" stroke="#dc2626" />
</LineChart>
```

### Smart Chat
Ask XenoAI:
- "Analyze this weather data..."
- "Predict tomorrow's temperature..."
- "Compare weather patterns..."

---

## 🎨 Icons Available (Lucide)

Weather: `Cloud`, `CloudRain`, `Sun`, `Moon`, `Wind`, `Snowflake`
Data: `TrendingUp`, `TrendingDown`, `BarChart`, `PieChart`
UI: `Search`, `Menu`, `X`, `ChevronRight`, `Check`

[Browse all 1000+ icons](https://lucide.dev/icons/)

---

## 📚 Documentation Links

- [Recharts Docs](https://recharts.org/)
- [Lucide Icons](https://lucide.dev/)
- [Date-fns Docs](https://date-fns.org/)
- [React Query Docs](https://tanstack.com/query/latest)
- [Axios Docs](https://axios-http.com/)

---

Made with ❤️ for XenoAI
