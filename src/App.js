import './App.css';
// import {useSelector, useDispatch} from 'react-redux'
import Weather from './components/Weather'
import WeatherDetails from './components/WeatherDetails'
import store from './redux/store'
function App() {
    console.log(store)
    return (
    <div className="container">
        <Weather/>
        <WeatherDetails/>
    </div>
  );
}

export default App;
