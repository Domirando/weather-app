import './App.css';
import  Weather from './components/Weather'
import WeatherDetails from './components/WeatherDetails'
function App() {
    return (
        <div className="container">
            <Weather/>
            <WeatherDetails/>
        </div>
  );
}

export default App;
