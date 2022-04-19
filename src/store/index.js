import {createStore} from 'redux'

// eslint-disable-next-line no-unused-vars
const reducer = (state={counter: 10}, action) => {
    switch(action.type){
        case 'INC':
            return {counter: state.counter+1}
        case 'DEC':
            return {counter: state.counter-1}
        case 'ADD':
            return {counter: state.counter+action.payload}
    }
    return state
}
const store = createStore(reducer)

export default store