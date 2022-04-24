import './App.css';
import {useEffect} from 'react'
import {fetchWeather} from './redux/actions'
import  Weather from './components/Weather'
import WeatherDetails from './components/WeatherDetails'
function App() {
    useEffect(() => {
        fetchWeather()
    }, [])
    return (
        <div className="container">
            <Weather/>
            <WeatherDetails/>
        </div>
  );
}

export default App;
