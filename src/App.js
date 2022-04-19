import './App.css';
// import {useSelector, useDispatch} from 'react-redux'
import Weather from './components/Weather'
import WeatherDetails from './components/WeatherDetails'
function App() {
  // const counter = useSelector((state) => state.counter)
  // const dispatch = useDispatch()
  // const increment = () => {
  //     dispatch({type: 'INC'})
  // }
  // const decrement = () => {
  //     dispatch({type: 'DEC'})
  // }
  // const addBy = () => {
  //   dispatch({type: 'ADD', payload: 10})
  // }
    return (
    <div className="container">
        <Weather/>
        <WeatherDetails/>
    </div>
  );
}

export default App;
