import * as actions from './actionType'
import { state as initialState} from './state'
const api_key = '0d9442bf0fb284af058318ac2bcf816d'
let reducer = (state=initialState, action) => {
    switch(action.type){
        case actions.LOCATION_CHANGED:
            return [
                {
                    city: action.payload.city
                }
            ]
        default:
            return state
    }
}
export default reducer