import './App.css';
import {useEffect} from 'react'
import {fetchWeather} from './redux/actions'
import Weather from './components/Weather'
import WeatherDetails from './components/WeatherDetails'
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchWeather('Tashkent'))
    }, [])
    return (
        <div className="container">
            <Weather/>
            <WeatherDetails/>
        </div>
  );
}

export default App;
