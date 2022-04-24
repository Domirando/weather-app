import * as actions from "./actionType";
export const locationChanged = city => ({
    type: actions.LOCATION_CHANGED,
    payload: {
        city
    }
})

