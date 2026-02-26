import { Search, Sun, Waves, Wind } from 'lucide-react'
import React, { useEffect , useState , useRef } from 'react'
import './Weather.css'

export const Weather = () => {
    const inputref = React.useRef();
    const [weatherData, setWeatherData] = React.useState(false);

   const search = async (city) => {
    if (city === '') {
        alert('Please enter a city name')
        return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}&units=metric`
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.round(data.main.temp),
        location: data.name,
      })
    } catch (error) {
      console.error(error)
    }
  }

    useEffect(() =>{
        search("Kathmandu");
    }, [])

  return (
    <div className='weather'>
        <div className='searchBar'>
            <input ref={inputref} 
             onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        search(inputref.current.value)
                    }
                }}
                 type="text" placeholder='Enter city name' />
            <button onClick={() => search(inputref.current.value)}
               ><Search/></button>
        </div>
        <div className='weatherDescription'>
        <Sun className='sun'/>
            <p className='temperature'>{weatherData.temperature}°C </p>
            <p className='location'>{weatherData.location}</p>
            </div>
            <div className='weatherData'>
                < div className='col'>
                    <Waves className='humidity'/>   
                    <p>Humidity</p>
                    <p>{weatherData.humidity}%</p>
                    <Wind className='wind'/>
                    <p>Wind Speed</p>
                    <p>{weatherData.windSpeed} km/h</p>
                </div>
            </div>
    </div>
  )
}
