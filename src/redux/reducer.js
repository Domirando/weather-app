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
            return {
                ...state,
                city: action.payload,
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