
/*created by Zulqarnain on 24-01-2018*/

import {createStore} from 'redux'

const reducer = (state, action) => {

    switch (action.type){
        case 'ADD':
            state = state + action.payload;
            break;
        case 'SUB':
            state = state - action.payload;
            break;
        default:
            break;
    }

    return state
};

const store = createStore(reducer, 1);

store.subscribe(() => {
   console.log('Store Updated : ' + store.getState())
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