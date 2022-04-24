import * as actions from './actionType'
import { state as initialState} from './state'
const api_key = '0d9442bf0fb284af058318ac2bcf816d'
let reducer = (state=initialState, action) => {
    switch(action.type){
        case actions.FETCH_WEATHER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actions.FETCH_WEATHER_SUCCESS:
            console.log('action info', action.payload)
            return {
                ...state,
                city: action.payload.name,
                wind: Math.round(action.payload.wind.speed),
                icon: action.payload.weather[0].icon,
                weather: action.payload.weather[0].main,
                temp: Math.round(action.payload.main.temp),
                humidity: Math.round(action.payload.main.humidity),
                cloudy: Math.round(action.payload.clouds.all),
                loading: false
            }
        case actions.FETCH_WEATHER_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}
export default reducer