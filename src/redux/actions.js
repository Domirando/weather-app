import * as actions from "./actionType";
import axios from 'axios'

export const locationChanged = city => ({
    type: actions.LOCATION_CHANGED,
    payload: {
        city
    }
})
export const fetchWeatherRequest = city => ({
    type: actions.FETCH_WEATHER_REQUEST,
})
export const fetchWeatherSuccess = info => ({
    type: actions.FETCH_WEATHER_SUCCESS,
    payload: info
})

export const fetchWeatherFailure = error => ({
    type: actions.FETCH_WEATHER_FAILURE,
    payload: error
})
export const fetchWeather = () => {
    return function(dispatch) {
        dispatch(fetchWeatherRequest)
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=Tashkent,Uzbekistan&units=metric&appid=0d9442bf0fb284af058318ac2bcf816d')
            .then(res => {
                const info = res.data
                console.log(info)
                dispatch(fetchWeatherSuccess(info))
            }).catch(error => {
                dispatch(fetchWeatherFailure(error.message))
            })
    }
}

