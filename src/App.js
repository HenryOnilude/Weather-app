import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Header from './Header';
import SearchIcon from './SearchIcon';
import Background from './Background';

// Main App component
function App() {

//Store weather data and user input location 
  const [data, setData] = useState({})
  const [location, setLocation] = useState('');
  
// API URL with location query parameter
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=YOURAPIKEY`
  const apiKey = 'YOURAPIKEY'
// Fetch weather data on page load based on user's location  
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        // Use the coordinates to fetch weather data
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;
        axios.get(url).then((response) => {
          setData(response.data);
        });
      });
    }
  }, []);


// Search weather data by location when Enter is clicked
const searchLocation = (event) => {
  if (event.key === 'Enter') {

    axios.get(url)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        if(error.response.status === 404) {
          alert('Location not found');  
        }
      });

    setLocation('');
  }
}

  return (

    <div className="app">
        
      <Header />  
      <Background weatherDescription = {data.weather ? data.weather[0].main : null} />
      <div className="search">
        <input className="input"
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        type="text"/>
      
       <span>
       <SearchIcon />
      </span>
 
      </div>
      <div className="search">
      </div>
      <div className="container">
        <div className="top">

          <div className="location"> 
          <p>{data.name}</p>
          </div>
          <div className="temp">
          {
  data.main ? (
    <h1>
      {((data.main.temp - 32) * (5/9)).toFixed()}°C
    </h1>
  ) : null
}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}

          </div>
        </div>

        {data.name !== undefined && 
         <div className="bottom">
         <div className="feels">
           {data.main ? <p> {Math.round(data.main.feels_like - 32 *(5/9).toFixed())} °C</p> : null }

        <p> Feels like</p>
         </div>
         <div className="humidity">
           {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
           <p>Humidity</p>
         </div>
         <div className="wind">
        {data.wind ? <p className='bold'>{data.wind.speed} MPH</p> : null}
           <p>Wind Speed</p>
         </div>
         
       </div>
        
        }
       


      </div>
    </div>
  );
}

export default App;
