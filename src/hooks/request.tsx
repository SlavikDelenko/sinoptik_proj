import { useState, useEffect } from 'react'; 
import axios from 'axios'; 
 
interface WeatherData { 
  main: { 
    temp: number; 
  }; 
  weather: { 
    description: string; 
  }[]; 
} 
 
interface WeatherApiHook { 
  weatherData: WeatherData | null; 
  loading: boolean; 
  error: string | null; 
} 
 
const useWeatherApi = (city: string): WeatherApiHook => { 
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState<string | null>(null); 
 
  useEffect(() => { 
    const fetchWeatherData = async () => { 
      try { 
        const apiKey = 'be062ae90cf3d3303f85298bf828843e'; 
        const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;  
        
        const response = await axios.get<WeatherData>(apiUrl);  
        ""
        setWeatherData(response.data); 
        setLoading(false); 
        setError(null); 
      } catch (error) { 
        setLoading(false); 
        setError('Error fetching weather data'); 
        setWeatherData(null); 
      } 
    }; 
 
    fetchWeatherData(); 
  }, [city]); 
 
  return { weatherData, loading, error }; 
}; 
 
export default useWeatherApi;
