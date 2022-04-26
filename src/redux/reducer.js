import * as actions from './actionType'
import { state as initialState} from './state'
import {fetchWeather} from './actions'

let reducer = (state=initialState, action) => {
    switch(action.type){
        case actions.FETCH_WEATHER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actions.FETCH_WEATHER_SUCCESS:
            console.log('action info', action.payload);
            return {
                ...state,
                city: action.payload.name,
                wind: Math.round(action.payload.wind.speed),
                icon: action.payload.weather[0].icon,
                weather: action.payload.weather[0].main,
                temp: Math.round(action.payload.main.temp),
                humidity: Math.round(action.payload.main.humidity),
                cloudy: Math.round(action.payload.clouds.all),
                weekday: (new Date(Date.now()  + 1000 * (action.payload.timezone / 3600))).toLocaleString("en-US", {weekday: "long"}),
                hours: (new Date(Date.now()  + 1000 * (action.payload.timezone / 3600))).toLocaleString("en-US", {hour: "numeric"}),
                minutes: (new Date(Date.now()  + 1000 * (action.payload.timezone / 3600))).toLocaleString("en-US", {minute: "numeric"}),
                day: (new Date(Date.now()  + 1000 * (action.payload.timezone / 3600))).toLocaleString("en-US", {weekday: "long"}),
                month: (new Date(Date.now()  + 1000 * (action.payload.timezone / 3600))).toLocaleString("en-US", {month: "long"}),
                loading: false
            }
        case actions.FETCH_WEATHER_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case actions.SEARCH_TERM:
            console.log(action.payload)
            return {
                ...state,
                searchCity: action.payload
            }
        default:
            return state
    }
}
export default reducer