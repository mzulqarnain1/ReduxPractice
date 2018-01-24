
/*created by Zulqarnain on 24-01-2018*/

import {createStore} from 'redux'

const init_state = {
    result : 1,
    user: 'Max',
    lastValues: []
};

const reducer = (state = init_state, action) => {

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

const store = createStore(reducer);

store.subscribe(() => {
   console.log('Store Updated');
   console.log(store.getState())
});

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