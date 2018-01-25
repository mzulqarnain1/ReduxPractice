
/*created by Zulqarnain on 24-01-2018*/

import {createStore, combineReducers, applyMiddleware} from 'redux'
import logger from 'redux-logger'

const init_state = {
    result : 1,
    user: 'Max',
    lastValues: []
};

const mathReducer = (state = init_state, action) => {

    switch (action.type){
        case 'ADD':
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        case 'SUB':
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        default:
            break;
    }

    return state
};

const userReducer = (state = {'name': 'zee', 'age': 20, lastValues: []}, action) => {

    switch (action.type){
        case 'ADD_AGE':
            state = {
                ...state,
                age: state.age + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        default:
            break;
    }

    return state
};

const myLogger = (store) => (next) => (action) => {
    console.log("Logged Action", action);
    next(action)
};

const store = createStore(combineReducers({mathReducer, userReducer}),
    {},
    applyMiddleware(logger)
);

// store.subscribe(() => {
//    console.log('Store Updated');
//    console.log(store.getState())
// });

store.dispatch({
    type: 'ADD',
    payload: 150
});

store.dispatch({
    type: 'ADD',
    payload: 190
});

store.dispatch({
    type: 'SUB',
    payload: 251
});

store.dispatch({
    type: 'ADD_AGE',
    payload: 40,
});