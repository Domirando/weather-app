import './App.css';
import {useEffect} from 'react'
import {fetchWeather, searchTerm} from './redux/actions'
import Weather from './components/Weather'
import WeatherDetails from './components/WeatherDetails'
import {useDispatch, useSelector} from "react-redux";

function App() {
    const dispatch = useDispatch()
    const search = useSelector(state=>state.searchCity)
    useEffect(() => {
        dispatch(fetchWeather('Andijan'))
        dispatch(searchTerm(search))
    }, [])
    return (
        <div className="container">
            <Weather/>
            <WeatherDetails/>
        </div>
  );
}

export default App;
